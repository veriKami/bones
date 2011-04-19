command = Bones.Command.extend();

command.description = 'start application';

command.options.adminParty = {
    'shortcut': 'a',
    'description': 'Enable admin mode.',
    'default': false
};

command.prototype.initialize = function(options) {
    if (!Object.keys(options.servers).length) {
        console.warn(Bones.colorize('No servers defined.', 'red'));
        return;
    }

    for (var server in options.servers) {
        server = new options.servers[server](options);
        server.start();
        console.warn('Started %s.', Bones.colorize(server, 'green'));
    }
};
