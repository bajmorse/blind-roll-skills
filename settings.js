export const registerSettings = function() {
  game.settings.register("blind-roll-skills", "forceBlindRolls", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingForceBlindRolls"),
    hint: game.i18n.localize("BLINDROLLSKILLS.SettingForceBlindRollsHint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean
  });

    game.settings.register("blind-roll-skills", "hiddenMessage", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHiddenMessage"),
    hint: game.i18n.localize("BLINDROLLSKILLS.SettingHiddenMessageHint"),
    scope: "world",
    config: true,
    default: "Don't worry, what you don't know can't hurt you!",
    type: String
  });

  game.settings.register("blind-roll-skills", "hideAcrobatics", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideAcrobatics"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideAnimalHandling", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideAnimalHandling"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideArcana", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideArcana"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideAthletics", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideAthletics"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideDeception", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideDeception"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideHistory", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideHistory"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideInsight", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideInsight"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideIntimidation", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideIntimidation"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideInvestigation", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideInvestigation"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideMedicine", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideMedicine"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideNature", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideNature"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hidePerception", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHidePerception"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hidePerformance", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHidePerformance"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hidePersuasion", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHidePersuasion"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideReligion", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideReligion"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideSleightOfHand", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideSleightOfHand"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideStealth", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideStealth"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("blind-roll-skills", "hideSurvival", {
    name: game.i18n.localize("BLINDROLLSKILLS.SettingHideSurvival"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
}
