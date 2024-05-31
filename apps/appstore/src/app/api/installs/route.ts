import { installedApps } from "@appstore/installedApps";
import { mockAppsData } from "@appstore/mockAppsData";

export const dynamic = 'force-dynamic' // defaults to auto

// export async function OPTIONS() {
//     return new Response(null, {
//         status: 200,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//             'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//         }
//     });
// }

export async function GET(request: Request) {
    const headers = request.headers;
    const email = headers.get("authorization");

    if (!email) {
        return new Response(null, {
            status: 401,
        });
    }

    const apps = installedApps.get(email) || new Set();
    const res = mockAppsData.filter((app) => apps.has(app.id));

    return new Response(JSON.stringify(res), {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}

export async function POST(request: Request) {
    const searchParams = new URL(request.url).searchParams;
    const email = searchParams.get("email");
    const body = await request.json();
    const appId = body.appId;
    const app = await mockAppsData.find((app) => app.id === appId);

    if (!app || !email) {
        return new Response(null, {
            status: 400,
        });
    }

    if (!installedApps.has(email)) {
        installedApps.set(email, new Set());
    }

    const oldInstalledApps = installedApps.get(email) || new Set();
    oldInstalledApps.add(appId);

    if (app.webhooks?.installation) {
        const res = await fetch(app.webhooks.installation, {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await res.json();
        console.log('webhook response', response)
    }

    installedApps.set(email, oldInstalledApps);

    return new Response(null, {
        status: 201,
    });
}