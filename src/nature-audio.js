export const natureTracks=[
  {
    "id": "rain",
    "name": {
      "zh": "雨",
      "en": "Rain"
    },
    "description": {
      "zh": "加州雨声，雨滴落在地面和叶片上",
      "en": "Rain falling on earth and leaves in California"
    },
    "author": "Andron827",
    "license": "CC0 1.0",
    "source": "https://freesound.org/people/Andron827/sounds/464334/",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "src": "/audio/rain.mp3",
    "duration": 61.354558
  },
  {
    "id": "waves",
    "name": {
      "zh": "海浪",
      "en": "Waves"
    },
    "description": {
      "zh": "丹麦海岸，远处偶有船声",
      "en": "A Danish shore, with a distant vessel"
    },
    "author": "Luftrum",
    "license": "CC BY 4.0",
    "source": "https://freesound.org/people/Luftrum/sounds/48412/",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "src": "/audio/waves.mp3",
    "duration": 120.0
  },
  {
    "id": "birds",
    "name": {
      "zh": "鸟鸣",
      "en": "Birdsong"
    },
    "description": {
      "zh": "Shawnee Forest 清晨的鸟鸣与啄木声",
      "en": "Morning birds and woodpeckers in Shawnee Forest"
    },
    "author": "kvgarlic",
    "license": "CC0 1.0",
    "source": "https://freesound.org/people/kvgarlic/sounds/156826/",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "src": "/audio/birds.mp3",
    "duration": 132.480794
  },
  {
    "id": "water",
    "name": {
      "zh": "流水",
      "en": "Water"
    },
    "description": {
      "zh": "法国林间小溪，偶有远处鸟鸣",
      "en": "A woodland stream in France, with distant birds"
    },
    "author": "gluckose",
    "license": "CC0 1.0",
    "source": "https://freesound.org/people/gluckose/sounds/333987/",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "src": "/audio/water.mp3",
    "duration": 156.0
  },
  {
    "id": "wind",
    "name": {
      "zh": "风",
      "en": "Wind"
    },
    "description": {
      "zh": "Texas 田野的风与阵风",
      "en": "Wind and gusts in a Texas field"
    },
    "author": "felix.blume",
    "license": "CC0 1.0",
    "source": "https://freesound.org/people/felix.blume/sounds/217506/",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
    "src": "/audio/wind.mp3",
    "duration": 212.318254
  }
];

export function shuffleBag(ids,previous,random=Math.random){
 const bag=[...new Set(ids)];
 for(let i=bag.length-1;i>0;i--){const j=Math.min(i,Math.max(0,Math.floor(random()*(i+1))));[bag[i],bag[j]]=[bag[j],bag[i]];}
 if(bag.length>1&&bag[0]===previous)[bag[0],bag[1]]=[bag[1],bag[0]];
 return bag;
}
export function advancePlaylist(queue,ids,previous,random=Math.random){
 const allowed=new Set(ids),remaining=[...new Set(queue)].filter(id=>allowed.has(id));
 const bag=remaining.length?remaining:shuffleBag(ids,previous,random);
 return {id:bag[0]??null,queue:bag.slice(1)};
}
