import discord
from discord import app_commands
from discord.ext import commands
from database import db
from languages import get_text

class SettingsGroup(app_commands.Group):
    def __init__(self):
        super().__init__(name="settings", description="Configura las opciones del bot")

    async def interaction_check(self, interaction: discord.Interaction, /) -> bool:
        if interaction.command and interaction.command.qualified_name == "settings server":
            if interaction.guild and not interaction.user.guild_permissions.administrator:
                await interaction.response.send_message("🛑 Solo los administradores pueden usar este comando.", ephemeral=True)
                return False
        return True

    @app_commands.command(name="user", description="Configura el idioma para ti")
    @app_commands.allowed_installs(guilds=True, users=True)
    @app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)
    @app_commands.choices(lang=[
        app_commands.Choice(name="Español", value="es"),
        app_commands.Choice(name="English", value="en"),
        app_commands.Choice(name="Français", value="fr")
    ])
    async def set_user_lang(self, interaction: discord.Interaction, lang: app_commands.Choice[str]):
        await db.set_user_lang(str(interaction.user.id), lang.value)
        msg = get_text(lang.value, "lang_updated")
        await interaction.response.send_message(msg, ephemeral=True)

    @app_commands.command(name="server", description="Configura el idioma para este servidor (Solo Admins)")
    # Solo instalable en servidores, y no aparece en DMs
    @app_commands.allowed_installs(guilds=True, users=False)
    @app_commands.allowed_contexts(guilds=True, dms=False, private_channels=False)
    @app_commands.choices(lang=[
        app_commands.Choice(name="Español", value="es"),
        app_commands.Choice(name="English", value="en"),
        app_commands.Choice(name="Français", value="fr")
    ])
    @app_commands.guild_only()
    async def set_guild_lang(self, interaction: discord.Interaction, lang: app_commands.Choice[str]):
        if not interaction.user.guild_permissions.administrator:
            return await interaction.response.send_message("🛑 Solo los administradores pueden usar este comando.", ephemeral=True)

        await db.set_guild_lang(str(interaction.guild.id), lang.value)
        msg = get_text(lang.value, "lang_guild_updated")
        await interaction.response.send_message(msg, ephemeral=True)

class SettingsCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.bot.tree.add_command(SettingsGroup())

    def cog_unload(self):
        self.bot.tree.remove_command("settings")

async def setup(bot):
    await bot.add_cog(SettingsCog(bot))
