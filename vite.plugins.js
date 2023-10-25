import { homedir } from 'os';
import { resolve } from 'path';
import fs from 'fs';

export let bladeRefreshPlugin = {
    name: 'blade',
    handleHotUpdate({ file, server }) {
        if (file.endsWith('.blade.php')) {
            server.ws.send({
                type: 'full-reload',
                path: '*',
            });
        }
    },
};

export const serverConfiguration = (host) => {
    const keyPath = resolve(
        homedir(),
    );

    const certificatePath = resolve(
        homedir(),    );

    if (!fs.existsSync(keyPath) || !fs.existsSync(certificatePath)) {
        return {};
    }

    return {
        hmr: { host },
        host,
        https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certificatePath),
        },
    };
};
