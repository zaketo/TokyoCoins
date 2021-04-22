/////* || [INITIALIZATION] || */////
const LOGGER = require("../../INITIALIZATION/logger")
const CONFIG = require("../../INITIALIZATION/config.js")
const DATABASE = require("../../INITIALIZATION/db.js")
const DISCORD = require("discord.js");

/////* || [ACTIONS] || */////
module.exports.run = async(CLIENT, message, ARGS, PREFIXARRAY) => {

    let category = [];

    let getGuildSetting = `SELECT * FROM guildsettings WHERE guildId = '${message.guild.id}';`;





        let embed = new DISCORD.MessageEmbed();
        embed.setDescription("Voici mes commandes. \n Mon prefix est " + ".");

        CLIENT.COMMANDS.forEach(command => {
            if (category.indexOf(command.config.category) == -1) {
                category.push(command.config.category)
            }
        });


        category.forEach(catégorie  => {
            let commandlist = "";
            CLIENT.COMMANDS.forEach(command => {
                if (command.config.category == catégorie ) {
                    commandlist = commandlist + "`" + command.config.name + "` "
                }
            })
            embed.addField(catégorie, commandlist);
        });

        message.channel.send(embed);



}



module.exports.config = {
    category: "Information",
    name: __filename.slice(__dirname.length + 1, __filename.length - 3),
    aliases: ["h"],
    serverForced: false
}

module.exports.help = {
    description: "Command to see all Commands",
    utilisations: `help`,
    exemples: `i+help`
}