var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0022205760059783586,
          "pitch": 0.12152954826966678,
          "rotation": 4.71238898038469,
          "target": "1-hallway-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hallway-view-1",
      "name": "HALLWAY VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01998259658037327,
          "pitch": 0.2809810913982158,
          "rotation": 0,
          "target": "3-hallway-view-3"
        },
        {
          "yaw": -1.5836446578154586,
          "pitch": 0.13218895617242055,
          "rotation": 1.5707963267948966,
          "target": "2-hallway-view-2"
        },
        {
          "yaw": 1.7299051517659905,
          "pitch": 0.15469370011049577,
          "rotation": 1.5707963267948966,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hallway-view-2",
      "name": "HALLWAY VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.07656544600186,
          "pitch": 0.0751470655108264,
          "rotation": 3.141592653589793,
          "target": "1-hallway-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway-view-3",
      "name": "HALLWAY VIEW 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3935822204110835,
          "pitch": 0.19833542047803832,
          "rotation": 3.141592653589793,
          "target": "29-basement-great-room"
        },
        {
          "yaw": -0.17365886842938494,
          "pitch": 0.12618223050719024,
          "rotation": 4.71238898038469,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": -3.0737880871742256,
          "pitch": 0.227384806303629,
          "rotation": 3.141592653589793,
          "target": "1-hallway-view-1"
        },
        {
          "yaw": 2.0347618262629865,
          "pitch": 0.14311768820356363,
          "rotation": 1.5707963267948966,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.013032769587734805,
        "pitch": 0.03168787308031895,
        "fov": 1.3220884824072174
      },
      "linkHotspots": [
        {
          "yaw": 1.4443661083996453,
          "pitch": 0.07854211421683388,
          "rotation": 4.71238898038469,
          "target": "7-kitchen-view-1"
        },
        {
          "yaw": 2.319823676256183,
          "pitch": 0.09363285191580495,
          "rotation": 0,
          "target": "10-landing-view-1"
        },
        {
          "yaw": -3.067657249288615,
          "pitch": 0.08785177265858124,
          "rotation": 3.141592653589793,
          "target": "29-basement-great-room"
        },
        {
          "yaw": -2.8510338138468967,
          "pitch": 0.034032191657701105,
          "rotation": 1.5707963267948966,
          "target": "3-hallway-view-3"
        },
        {
          "yaw": -2.827698381151434,
          "pitch": 0.22609112391437236,
          "rotation": 7.853981633974483,
          "target": "5-greatroom-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-greatroom-view-1",
      "name": "GREATROOM VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2892148960931813,
          "pitch": 0.1353810946597065,
          "rotation": 3.141592653589793,
          "target": "6-greatroom-view-2"
        },
        {
          "yaw": 0.9992168016316239,
          "pitch": 0.06583344965281768,
          "rotation": 5.497787143782138,
          "target": "4-dining"
        },
        {
          "yaw": 1.4638855780051472,
          "pitch": 0.08872963289634583,
          "rotation": 0,
          "target": "7-kitchen-view-1"
        },
        {
          "yaw": 1.8479978069675589,
          "pitch": 0.20519460336430662,
          "rotation": 13.351768777756625,
          "target": "10-landing-view-1"
        },
        {
          "yaw": -1.405062706084749,
          "pitch": 0.16483704339862193,
          "rotation": 0,
          "target": "3-hallway-view-3"
        },
        {
          "yaw": -1.726543356321601,
          "pitch": 0.19952740745247155,
          "rotation": 3.141592653589793,
          "target": "29-basement-great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-greatroom-view-2",
      "name": "GREATROOM VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9487420676078879
      },
      "linkHotspots": [
        {
          "yaw": -0.5521926469736052,
          "pitch": 0.053255068536270045,
          "rotation": 7.853981633974483,
          "target": "3-hallway-view-3"
        },
        {
          "yaw": -0.6911839820370318,
          "pitch": 0.07260836881957289,
          "rotation": 3.141592653589793,
          "target": "29-basement-great-room"
        },
        {
          "yaw": -1.2839963020783554,
          "pitch": 0.07212002853306565,
          "rotation": 0,
          "target": "10-landing-view-1"
        },
        {
          "yaw": -2.574928283287605,
          "pitch": 0.17569580275743313,
          "rotation": 4.71238898038469,
          "target": "4-dining"
        },
        {
          "yaw": -1.755477832291648,
          "pitch": 0.062002289194403204,
          "rotation": 4.71238898038469,
          "target": "7-kitchen-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen-view-1",
      "name": "KITCHEN VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.34532007795119135,
          "pitch": 0.08753422884786133,
          "rotation": 3.141592653589793,
          "target": "8-kitchen-view-2"
        },
        {
          "yaw": -0.7060613961554001,
          "pitch": 0.10939126261245846,
          "rotation": 3.141592653589793,
          "target": "4-dining"
        },
        {
          "yaw": 1.8073410005918449,
          "pitch": 0.2534434575261528,
          "rotation": 0,
          "target": "10-landing-view-1"
        },
        {
          "yaw": -3.140676960528449,
          "pitch": 0.06351302413727566,
          "rotation": 0,
          "target": "3-hallway-view-3"
        },
        {
          "yaw": 2.9577110741706036,
          "pitch": 0.13297884933075288,
          "rotation": 3.141592653589793,
          "target": "29-basement-great-room"
        },
        {
          "yaw": -2.8942045270786476,
          "pitch": 0.12056921552896682,
          "rotation": 7.853981633974483,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": -1.7899989191399541,
          "pitch": 0.19696900402794704,
          "rotation": 4.71238898038469,
          "target": "6-greatroom-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen-view-2",
      "name": "KITCHEN VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1182796481073733,
          "pitch": 0.052453286777549124,
          "rotation": 3.141592653589793,
          "target": "4-dining"
        },
        {
          "yaw": -2.857806466139065,
          "pitch": 0.2212563513393011,
          "rotation": 3.141592653589793,
          "target": "7-kitchen-view-1"
        },
        {
          "yaw": -3.0922600589763096,
          "pitch": 0.00275369041797191,
          "rotation": 11.780972450961727,
          "target": "10-landing-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-stair",
      "name": "STAIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02743461982382911,
          "pitch": 0.017394533422688596,
          "rotation": 7.0685834705770345,
          "target": "10-landing-view-1"
        },
        {
          "yaw": 0.9428322402713949,
          "pitch": 0.12950494228286047,
          "rotation": 3.141592653589793,
          "target": "29-basement-great-room"
        },
        {
          "yaw": 1.2129937425138984,
          "pitch": 0.10213809483892078,
          "rotation": 0,
          "target": "3-hallway-view-3"
        },
        {
          "yaw": -1.9294693701144183,
          "pitch": 0.12342800632915996,
          "rotation": 3.141592653589793,
          "target": "4-dining"
        },
        {
          "yaw": -0.8195906099512289,
          "pitch": 0.08641730107374812,
          "rotation": 4.71238898038469,
          "target": "7-kitchen-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-landing-view-1",
      "name": "LANDING VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.022202145437194787,
          "pitch": -0.10835539097530322,
          "rotation": 0,
          "target": "11-landing-view-2"
        },
        {
          "yaw": 1.513271749226492,
          "pitch": 0.791703495322901,
          "rotation": 3.141592653589793,
          "target": "9-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-landing-view-2",
      "name": "LANDING VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09959549020528868,
          "pitch": -0.09691656805042825,
          "rotation": 0,
          "target": "12-upstair-view-1"
        },
        {
          "yaw": 1.3490828093960374,
          "pitch": 0.4477868544463881,
          "rotation": 3.141592653589793,
          "target": "10-landing-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-upstair-view-1",
      "name": "UPSTAIR VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3235263122805492,
          "pitch": 0.018946081813204785,
          "rotation": 3.141592653589793,
          "target": "15-bonus-room"
        },
        {
          "yaw": -0.43634429300847977,
          "pitch": 0.1360059531626252,
          "rotation": 4.71238898038469,
          "target": "13-upstair-view-2"
        },
        {
          "yaw": 0.9456327490219287,
          "pitch": 0.07565938971335484,
          "rotation": 1.5707963267948966,
          "target": "17-primary-bedroom-view-1"
        },
        {
          "yaw": -2.7239265202501883,
          "pitch": 0.3766911006270721,
          "rotation": 3.141592653589793,
          "target": "11-landing-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-upstair-view-2",
      "name": "UPSTAIR VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.007098772169200629,
          "pitch": 0.12087800472967558,
          "rotation": 0,
          "target": "14-upstair-view-3"
        },
        {
          "yaw": 0.18393566402867378,
          "pitch": 0.19788632265558093,
          "rotation": 7.853981633974483,
          "target": "16-laundry"
        },
        {
          "yaw": 2.010314327165455,
          "pitch": 0.03357366892812408,
          "rotation": 3.141592653589793,
          "target": "15-bonus-room"
        },
        {
          "yaw": -2.9016094881454606,
          "pitch": 0.12241121473976335,
          "rotation": 0,
          "target": "17-primary-bedroom-view-1"
        },
        {
          "yaw": -1.2846957252908062,
          "pitch": 0.23434201860831294,
          "rotation": 3.141592653589793,
          "target": "11-landing-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-upstair-view-3",
      "name": "UPSTAIR VIEW 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.019982577961357606,
          "pitch": 0.07975520314517581,
          "rotation": 0,
          "target": "23-bedroom-2-view-1"
        },
        {
          "yaw": 0.16070442329298018,
          "pitch": 0.15225005225567756,
          "rotation": 1.5707963267948966,
          "target": "28-bath"
        },
        {
          "yaw": -0.23117340645653606,
          "pitch": 0.15016621954154274,
          "rotation": 4.71238898038469,
          "target": "26-bedroom-3-view-1"
        },
        {
          "yaw": -2.5515952905607513,
          "pitch": 0.04175151117286724,
          "rotation": 3.141592653589793,
          "target": "12-upstair-view-1"
        },
        {
          "yaw": -3.030055004318001,
          "pitch": 0.0531258453188439,
          "rotation": 0,
          "target": "17-primary-bedroom-view-1"
        },
        {
          "yaw": 2.616059737418052,
          "pitch": 0.05227988470303302,
          "rotation": 3.141592653589793,
          "target": "15-bonus-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bonus-room",
      "name": "BONUS ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6043895680115501,
          "pitch": 0.02740106766570527,
          "rotation": 1.5707963267948966,
          "target": "13-upstair-view-2"
        },
        {
          "yaw": -1.0961554612626703,
          "pitch": 0.0064502547169453806,
          "rotation": 3.141592653589793,
          "target": "11-landing-view-2"
        },
        {
          "yaw": -1.730380408825022,
          "pitch": 0.02097669923282197,
          "rotation": 4.71238898038469,
          "target": "17-primary-bedroom-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-laundry",
      "name": "LAUNDRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9097394094401583,
          "pitch": 0.08355077616919004,
          "rotation": 0,
          "target": "17-primary-bedroom-view-1"
        },
        {
          "yaw": 2.560019030846253,
          "pitch": 0.01786685542941946,
          "rotation": 3.141592653589793,
          "target": "12-upstair-view-1"
        },
        {
          "yaw": -1.511244214321561,
          "pitch": 0.060342941613278356,
          "rotation": 9.42477796076938,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-primary-bedroom-view-1",
      "name": "PRIMARY BEDROOM VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3314894203941954,
          "pitch": 0.04825525950077392,
          "rotation": 3.141592653589793,
          "target": "18-primary-bedroom-view-2"
        },
        {
          "yaw": -0.9983407947696925,
          "pitch": -0.0525329507428296,
          "rotation": 4.71238898038469,
          "target": "20-ensuite-view-1"
        },
        {
          "yaw": -1.4903664683078048,
          "pitch": 0.005871998513050869,
          "rotation": 4.71238898038469,
          "target": "19-walk-in-closet-primary-bedroom"
        },
        {
          "yaw": 2.3559922229779326,
          "pitch": 0.032108284337164505,
          "rotation": 0,
          "target": "13-upstair-view-2"
        },
        {
          "yaw": 1.9817045119051455,
          "pitch": 0.028293518631112846,
          "rotation": 3.141592653589793,
          "target": "12-upstair-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-primary-bedroom-view-2",
      "name": "PRIMARY BEDROOM VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5530587560434874,
          "pitch": 0.0283353500074206,
          "rotation": 1.5707963267948966,
          "target": "20-ensuite-view-1"
        },
        {
          "yaw": -0.04659839093341489,
          "pitch": 0.046547851348517355,
          "rotation": 1.5707963267948966,
          "target": "19-walk-in-closet-primary-bedroom"
        },
        {
          "yaw": -0.23117340645653606,
          "pitch": 0.05182965316778976,
          "rotation": 3.141592653589793,
          "target": "17-primary-bedroom-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-walk-in-closet-primary-bedroom",
      "name": "WALK IN CLOSET (PRIMARY BEDROOM)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.41983193020759835,
          "pitch": 0.021400004493134617,
          "rotation": 7.853981633974483,
          "target": "22-ensuite-view-3"
        },
        {
          "yaw": -0.9195577446688059,
          "pitch": 0.4352872799124494,
          "rotation": 3.141592653589793,
          "target": "17-primary-bedroom-view-1"
        },
        {
          "yaw": -0.9316072190894804,
          "pitch": 0.016687303106369455,
          "rotation": 0,
          "target": "13-upstair-view-2"
        },
        {
          "yaw": -1.1335617145379473,
          "pitch": 0.05849869595805224,
          "rotation": 3.141592653589793,
          "target": "12-upstair-view-1"
        },
        {
          "yaw": 2.705780710447705,
          "pitch": 0.07943536714160615,
          "rotation": 3.141592653589793,
          "target": "18-primary-bedroom-view-2"
        },
        {
          "yaw": 1.8251588057507142,
          "pitch": 0.05765733529289996,
          "rotation": 4.71238898038469,
          "target": "20-ensuite-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-ensuite-view-1",
      "name": "ENSUITE VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.029642086189657135,
          "pitch": 0.07284430927229835,
          "rotation": 7.853981633974483,
          "target": "21-ensuite-view-2"
        },
        {
          "yaw": -0.6830946917502327,
          "pitch": 0.06101150175200942,
          "rotation": 4.71238898038469,
          "target": "22-ensuite-view-3"
        },
        {
          "yaw": 2.452886968141013,
          "pitch": 0.13340767518510255,
          "rotation": 3.141592653589793,
          "target": "18-primary-bedroom-view-2"
        },
        {
          "yaw": -2.3892145233711553,
          "pitch": 0.07755421621746805,
          "rotation": 3.141592653589793,
          "target": "17-primary-bedroom-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-ensuite-view-2",
      "name": "ENSUITE VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5269219630960977,
          "pitch": 0.07302685197699077,
          "rotation": 3.141592653589793,
          "target": "18-primary-bedroom-view-2"
        },
        {
          "yaw": -2.8342428245685856,
          "pitch": 0.10605081443771347,
          "rotation": 3.141592653589793,
          "target": "22-ensuite-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-ensuite-view-3",
      "name": "ENSUITE VIEW 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.004440269587949075,
          "pitch": 0.051028286223946395,
          "rotation": 0,
          "target": "21-ensuite-view-2"
        },
        {
          "yaw": 1.7265091046801597,
          "pitch": 0.15309173978750934,
          "rotation": 0,
          "target": "17-primary-bedroom-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bedroom-2-view-1",
      "name": "BEDROOM 2 VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11715178709041396,
          "pitch": 0.013231358297014495,
          "rotation": 3.141592653589793,
          "target": "24-bedroom-2-view-2"
        },
        {
          "yaw": -1.0084686045048734,
          "pitch": 0.05578415151711269,
          "rotation": 4.71238898038469,
          "target": "25-walk-in-closet-bedroom-2"
        },
        {
          "yaw": 2.2722641371800485,
          "pitch": 0.09938682403665311,
          "rotation": 3.141592653589793,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-bedroom-2-view-2",
      "name": "BEDROOM 2 VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.013322743187867303,
          "pitch": 0.07976389373977355,
          "rotation": 4.71238898038469,
          "target": "14-upstair-view-3"
        },
        {
          "yaw": 0.6651140954217745,
          "pitch": 0.059089087810811236,
          "rotation": 7.853981633974483,
          "target": "25-walk-in-closet-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-walk-in-closet-bedroom-2",
      "name": "WALK IN CLOSET (BEDROOM 2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5159017064261295,
          "pitch": 0.11479749565853226,
          "rotation": 3.141592653589793,
          "target": "24-bedroom-2-view-2"
        },
        {
          "yaw": -1.1375229477094386,
          "pitch": 0.13919689151231296,
          "rotation": 7.0685834705770345,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bedroom-3-view-1",
      "name": "BEDROOM 3 VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.49399057573034,
          "pitch": 0.0897627024393941,
          "rotation": 3.141592653589793,
          "target": "27-bedroom-3-view-2"
        },
        {
          "yaw": -2.0059538522829143,
          "pitch": 0.026031958866184368,
          "rotation": 3.141592653589793,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-bedroom-3-view-2",
      "name": "BEDROOM 3 VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.405151165355928,
          "pitch": 0.10831236236870012,
          "rotation": 1.5707963267948966,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-bath",
      "name": "BATH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2649660683664141,
          "pitch": 0.04670280833516571,
          "rotation": 3.141592653589793,
          "target": "14-upstair-view-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-basement-great-room",
      "name": "BASEMENT GREAT ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2811140502290765,
          "pitch": -0.04750006903053183,
          "rotation": 3.141592653589793,
          "target": "30-basement-kitchen"
        },
        {
          "yaw": 2.5305641529316425,
          "pitch": 0.0017589160539586146,
          "rotation": 0,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": 1.939202156593864,
          "pitch": 0.02014598817339852,
          "rotation": 0,
          "target": "32-basement-bath"
        },
        {
          "yaw": 1.5427631430983846,
          "pitch": 0.014796988147327994,
          "rotation": 0,
          "target": "31-basement-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-basement-kitchen",
      "name": "BASEMENT KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.005563566803401088,
        "pitch": -0.011720163629316716,
        "fov": 1.3900591270580378
      },
      "linkHotspots": [
        {
          "yaw": -2.5734798864630264,
          "pitch": 0.07842114471060135,
          "rotation": 0,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": -2.7472342305818653,
          "pitch": 0.037857284949428305,
          "rotation": 0,
          "target": "32-basement-bath"
        },
        {
          "yaw": -2.9157616720832724,
          "pitch": 0.04373071069413825,
          "rotation": 0,
          "target": "31-basement-bedroom"
        },
        {
          "yaw": -3.0411779913086363,
          "pitch": 0.16860589250093838,
          "rotation": 3.141592653589793,
          "target": "29-basement-great-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-basement-bedroom",
      "name": "BASEMENT BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5404982125817597,
          "pitch": -0.009841343857090123,
          "rotation": 3.141592653589793,
          "target": "30-basement-kitchen"
        },
        {
          "yaw": -2.9235830263505065,
          "pitch": 0.14500769639288968,
          "rotation": 7.853981633974483,
          "target": "29-basement-great-room"
        },
        {
          "yaw": 2.7675556292685304,
          "pitch": 0.1029352849626779,
          "rotation": 0,
          "target": "5-greatroom-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-basement-bath",
      "name": "BASEMENT BATH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3528318239184784,
          "pitch": 0.10550182365160055,
          "rotation": 0,
          "target": "5-greatroom-view-1"
        },
        {
          "yaw": 2.794533614955454,
          "pitch": 0.10837214537068718,
          "rotation": 1.5707963267948966,
          "target": "29-basement-great-room"
        },
        {
          "yaw": 2.9493667245168886,
          "pitch": -0.013426417434271087,
          "rotation": 3.141592653589793,
          "target": "30-basement-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BIRKLEY 360 WALKTHROUGH",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
