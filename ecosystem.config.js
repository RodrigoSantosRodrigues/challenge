module.exports = {
    apps: [
        {
            name: 'challenge',
            script: './build/bin/index.js',
            instances: 1,
            exec_mode: 'cluster',
            interpreter : '/home/gdky3c34a/.nvm/versions/node/v10.11.0/bin/node',
            autorestart: true,
            watch: true,
            ignore_watch: [
                '.git',
                'public',
                'src/public',
                'build/public',
                'uploads',
                'newrelic_agent.log',
                'tmp'
            ],
            watch_options: {
                followSymlinks: false
            },
            max_memory_restart: '2G',
            env: {
                NODE_ENV: 'production',
                ENV: 'production'
            },
            env_production: {
                NODE_ENV: 'production',
                ENV: 'production'
            }
        }
    ]
};
