const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('\n\n**» Davet Link «** \n\n► https://discordapp.com/oauth2/authorize?client_id=492392575743819776&scope=bot&permissions=2146958847 ◄');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gosterir.',
  usage: 'davet'
};
