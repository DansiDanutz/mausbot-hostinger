# MausBot on Hostinger

A one-file wrapper that runs the published [OpenMausBot](https://github.com/milind-soni/OpenMausBot)
server (`openmausbot@0.1.169`) as a Hostinger Node.js web app.

Hostinger sets `PORT` and fronts the app with HTTPS; set `OMB_PUBLIC_URL` to the
app's URL (for example `https://maus.example.com`) so pairing links and webhooks
point at it. Chats, bots and engine sign-ins live in `data/`.

Deploy from the Hostinger panel: **Websites → Create site → Web app → Import a
Git repository**, pick this repo, and use:

- Build command: `npm install`
- Start command: `npm start`

Then open the app, and pair from the app's terminal with
`npx openmausbot pair --label "First admin"`.
