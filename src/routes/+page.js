

export const leftRotation = [
      {
        d: 2,
        arr: [1, 2, 3, 4, 5],
        expectedOutput: [3, 4, 5, 1, 2]
      },
      {
        d: 25,
        arr: [12, 43, 76, 76, 45, 66, 34],
        expectedOutput: [45, 66, 34, 12, 43, 76, 76]
      },
      {
        d: 11,
        arr: [25],
        expectedOutput: [25]
      },
      {
        d: 21,
        arr: [],
        expectedOutput: []
      },
      {
        d: 258,
        arr: [987, 234, 25, 16, 87, 45, 654, 342, 683, 256],
        expectedOutput: [683, 256, 987, 234, 25, 16, 87, 45, 654, 342]
      }
    ]

export const envars = {

    apiUrl: import.meta.env.VITE_API_URL,
    apiProject: import.meta.env.VITE_API_PROJECT,
    appBrand: import.meta.env.VITE_APP_BRAND,
    appName: import.meta.env.VITE_APP_NAME

}

export const countInstances = [
      {
        str:
          "Peter Piper picked a peck of pickled peppers A peck of pickled peppers Peter Piper picked",
        arr: ["peter", "a", "pepper", "piper", "The"],
        expectedOutput: [2, 2, 0, 2, 0]
      },
      {
        str:
          "Betty Botter bought some butter But she said the butter’s bitter If I put it in my batter, it will make my batter bitter But a bit of better butter will make my batter better So ‘twas better Betty Botter bought a bit of better butter",
        arr: ["but", "Botter", "bit", "butter", "I", "and"],
        expectedOutput: [2, 2, 2, 3, 1, 0]
      },
      {
        str:
          "How much wood would a woodchuck chuck if a woodchuck could chuck wood He would chuck he would as much as he could and chuck as much wood As a woodchuck would if a woodchuck could chuck wood",
        arr: ["as", "chuck", "could", "He", "dude", "much", "Woodchuck", "wood"],
        expectedOutput: [4, 5, 3, 3, 0, 3, 4, 4]
      },
      {
        str:
          "Susie works in a shoeshine shop Where she shines she sits, and where she sits she shines",
        arr: ["where", "she", "but", "shines", "though", "sits"],
        expectedOutput: [2, 4, 0, 2, 0, 1]
      },
      {
        str:
          "You know New York you need New York you know you need unique New York",
        arr: ["Unique", "pork", "york", "knew", "cork", "know"],
        expectedOutput: [1, 0, 3, 0, 0, 2]
      }
    ]

export const findIntersection = [
      {
        l1: [
          [1, 10],
          [1, 4]
        ],
        l2: [
          [8, 2],
          [2, 2]
        ],
        expectedOutput: -1
      },
      {
        l1: [
          [1, 4],
          [1, 10]
        ],
        l2: [
          [8, 2],
          [0, 2]
        ],
        expectedOutput: -1
      },
      {
        l1: [
          [1, 10],
          [1, 0]
        ],
        l2: [
          [8, 2],
          [0, 2]
        ],
        expectedOutput: 3
      },
      {
        l1: [
          [1820, 910],
          [1312, 910]
        ],
        l2: [
          [1440, 0],
          [1440, 1552]
        ],
        expectedOutput: 2350
      }
    ]

  