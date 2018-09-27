const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('**LeaderBot Bilgi**\n**---------------------** \nMerhaba Ben LeaderBot \n**---------------------**\nEglence Icin Tasarlanmadım \n**---------------------**\nHizmet Icin Tasarlandim');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'Botun Yapımcısını Gösterir.',
  usage: 'yapımcı'
};
