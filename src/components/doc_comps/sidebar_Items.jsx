const sidebar_Items = [


          {

    label: ["Install", "i-mingcute:safe-flash-fill"],
    items: [

      ["Welcome", "install/welcome"],
      ["Beginner", "install/beginner"],
      ["1337", "install/cli-install"],
    ],
  },




  {
    label: ["Features", "i-mdi:atom-variant"],
    items: [
      ["Window Manager", "walkthrough/window-manager"],
      ["Utilities", "walkthrough/utilities"],
    ],
  },


  {
    label:["KeyBindings","i-tabler:server-cog"],
    items:[
      ["dwm","keybindings/dwm"],
      ["bspwm","keybindings/bspwm"],
      ["EWM", "keybindings/ewm"],
    ]
  },

  {
    label:["guides","i-mdi-cog"],
    items:[

      ["The Init", "guides/theinit" ],
      ["suckless", "guides/patch-suckless" ],
      ["pwnvim", "guides/pwnvim" ],
      ["repos", "guides/repos" ],

    ]
  },
  // ["Features", "features", ""],
  // ["Debug config", "debugging-config", "i-ri-bug-line"],
  ["Contributing", "contribute", "i-mdi-github"],
  ["Donate", "donate", "i-line-md:heart"],
];

export default sidebar_Items;
