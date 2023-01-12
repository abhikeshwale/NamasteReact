import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.gif";
import "./index.css";

const restaurantList = [
  {
    uuid: "86060236-192d-4b07-b2bf-7e9f9a75f1c4",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "86060236-192d-4b07-b2bf-7e9f9a75f1c4",
      title: {
        text: "ドミノ・ピザ 上白根店 Domino's Pizza Kamishirane Store",
      },
      meta: [
        {
          text: "スポンサー",
          textFormat:
            '<span style="text-decoration: underline;text-decoration-color:#545454;text-underline-offset:4;">スポンサー</span>',
          actionUrl:
            "?mod=adsInfo&modctx=%E3%83%89%E3%83%9F%E3%83%8E%E3%83%BB%E3%83%94%E3%82%B6%20%E4%B8%8A%E7%99%BD%E6%A0%B9%E5%BA%97%20Domino%27s%20Pizza%20Kamishirane%20Store",
          badgeType: "SPONSORED",
        },
        {
          textFormat:
            '<span style="color:#545454"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "配達手数料 ¥199",
          textFormat:
            '<span><span style="color:#3a3a48">配達手数料 ¥199</span></span>',
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "配達手数料 ¥199",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "10–25 分",
          accessibilityText: "お届けまで 10～25 分です",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.7",
        accessibilityText:
          "5 つ星のうち 4.7 の評価を獲得した上位のレストラン 28 件の評価に基づいています。",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/%E3%83%88%E3%83%9F%E3%83%8E%E3%83%BB%E3%83%92%E3%82%B5-%E4%B8%8A%E7%99%BD%E6%A0%B9%E5%BA%97-dominos-pizza-kamishirane-store/hgYCNhktSweyv36fmnXxxA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/e2399ca4e5313ae7534cc561258c6d48/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/e2399ca4e5313ae7534cc561258c6d48/445a4b2618e10f7db95d4f17a85b117d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/e2399ca4e5313ae7534cc561258c6d48/1651207c9cb2a7942b37b3f3e4a0b899.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/e2399ca4e5313ae7534cc561258c6d48/1153e79d90aa7e9dd2351e1aa8dc4e16.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/e2399ca4e5313ae7534cc561258c6d48/820883a48567670acbd720bc76391291.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/e2399ca4e5313ae7534cc561258c6d48/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      storeAd: {
        impressionId: "d948d0e3-9645-4b28-ad66-3eae63200971",
        adData:
          "e51eeca73d34c57c1b65793a1ad3f54bb9570b783332a411ece4640b5bd02d6363b5c2482b798dc0639967db75c513e38f629796f8d9c3c8753e3e744a96e980302a9a5a14421788857332b85b9cf1829daabe25521d11b85b079b8b4b12cc8636b590fb3c5810d5bb8253614e65968afdc4a6ce764c267e4b490931954b47bc07a7aa7e47a540ccd4ae6bf8b66c132e2b533204ee1b1af3a579c59bb535139d922c8869522968c6be3dfdaa6e69ea2141e2ec2fb37cd9828f22baee7f2ed84f882f3ba65b75aef26506df5a9a2c019e893261a44ecbc6d4c81cbbde90b26efd2743b3f7901157debdf4fe5b21ad2012067c67303885a6e65ff63ef12cbb036f61b1bfb82ffdcbe96685c3e39b2633ad31d47b54e705a3c2ab92a91e29b220a0ec634c3d8397ea84b36b220672eeff3f65b4b707c281eb58cca940e40f43a5ad062844d68dbe69929ac42346a4684c578225b282d190252e225c6021080b083f1beb3d9f5b3bb3ecae41d970b71163118ad8dade6916e266528cca30a9061c843fb5d5fc344962",
      },
      tracking: {
        metaInfo: {
          pluginName: "adsFeedPlugin",
          analyticsLabel: "restaurant_ads",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            analytics_config_library_enabled: "true",
          },
        },
        storePayload: {
          storeUUID: "86060236-192d-4b07-b2bf-7e9f9a75f1c4",
          isOrderable: true,
          score: {
            breakdown: {
              FinalScore: 0.04354386404156685,
              t120d_eyeball_count: 25821,
              t120d_request_count: 206,
              "tm20220731-114743-NQSJDNWA-GWOVWL_conversion": 0.04354386404156685,
            },
            total: 0.04192206975249587,
          },
          etdInfo: {
            dropoffETARange: {
              min: 10,
              max: 25,
              raw: 5,
            },
          },
          fareInfo: {
            serviceFee: 199,
            dynamicBookingFeeTier: -1,
          },
          scheduleTimeSlots: null,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 35.4894,
        longitude: 139.5403,
        zIndex: 10000,
        description: {
          title: "ドミノ・ピザ 上白根店 Domino's Pizza Kamishirane Store",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.7",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "restaurant_ads",
  },
  {
    uuid: "65746d4b-5891-4523-9c69-bce1eb8079a8",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "65746d4b-5891-4523-9c69-bce1eb8079a8",
      title: {
        text: "マクドナルド二俣川アルコット店 McDonald's FUTAMATAGAWA ALCOTT",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#545454"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "配達手数料 ¥450",
          textFormat:
            '<span><span style="color:#3a3a48">配達手数料 ¥450</span></span>',
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "配達手数料 ¥450",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "10–25 分",
          accessibilityText: "お届けまで 10～25 分です",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.5",
        accessibilityText:
          "5 つ星のうち 4.5 の評価を獲得 200 件以上の評価に基づいています。",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/%E3%83%9E%E3%82%AF%E3%83%88%E3%83%8A%E3%83%AB%E3%83%88%E4%BA%8C%E4%BF%A3%E5%B7%9D%E3%82%A2%E3%83%AB%E3%82%B3%E3%83%83%E3%83%88%E5%BA%97-mcdonalds-futamatagawa-alcott/ZXRtS1iRRSOcabzh64B5qA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ab14178ab288f72adb5f4e0d20b3d00a/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ab14178ab288f72adb5f4e0d20b3d00a/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ab14178ab288f72adb5f4e0d20b3d00a/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ab14178ab288f72adb5f4e0d20b3d00a/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ab14178ab288f72adb5f4e0d20b3d00a/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/ab14178ab288f72adb5f4e0d20b3d00a/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            analytics_config_library_enabled: "true",
          },
        },
        storePayload: {
          storeUUID: "65746d4b-5891-4523-9c69-bce1eb8079a8",
          isOrderable: true,
          score: {
            breakdown: {
              FinalScore: 0.034247882780299506,
              FinalScorePreCalibration: 0.046327636966705325,
              PredictionScore: 0.0342378827802995,
              PredictionScorePreCalibration: 0.04631763696670532,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 2.844067193766412,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.979462397363174,
              t120d_eyeball_count: 35901,
              t120d_request_count: 4481,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.02451924010981286,
            },
            total: 0.034247882780299506,
          },
          etdInfo: {
            dropoffETARange: {
              min: 10,
              max: 25,
              raw: 20,
            },
          },
          fareInfo: {
            serviceFee: 450,
            dynamicBookingFeeTier: 9,
          },
          scheduleTimeSlots: null,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 35.4651,
        longitude: 139.532,
        zIndex: 9999,
        description: {
          title:
            "マクドナルド二俣川アルコット店 McDonald's FUTAMATAGAWA ALCOTT",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.5",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "1b38818b-ba00-4592-903f-68891cb78116",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "1b38818b-ba00-4592-903f-68891cb78116",
      title: {
        text: "餃子の王将 二俣川駅前",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#545454"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "配達手数料 ¥100",
          textFormat:
            '<span><span style="color:#3a3a48">配達手数料 ¥100</span></span>',
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "配達手数料 ¥100",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "20–35 分",
          accessibilityText: "お届けまで 20～35 分です",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.5",
        accessibilityText:
          "5 つ星のうち 4.5 の評価を獲得した上位のレストラン 89 件の評価に基づいています。",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/%E9%A4%83%E5%AD%90%E3%81%AE%E7%8E%8B%E5%B0%86-%E4%BA%8C%E4%BF%A3%E5%B7%9D%E9%A7%85%E5%89%8D/GziBi7oARZKQP2iJHLeBFg?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://d1ralsognjng37.cloudfront.net/97526ff0-e537-4f77-9196-4e84af823682.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/7d7de5a1-7c78-43a8-9cf2-61f917d9db63.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/5fd590f9-ee81-445c-9e3c-52043337d84e.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/1b711f2f-cb12-4f88-a491-d83d14f65aa8.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/c178a89c-653d-4956-9ce3-6b9159396411.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/cb38d510-7be3-47f5-9a37-bbada44e850d.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            analytics_config_library_enabled: "true",
          },
        },
        storePayload: {
          storeUUID: "1b38818b-ba00-4592-903f-68891cb78116",
          isOrderable: true,
          score: {
            breakdown: {
              FinalScore: 0.008681845636187261,
              FinalScorePreCalibration: 0.01144723726272583,
              PredictionScore: 0.008671845636187262,
              PredictionScorePreCalibration: 0.01143723726272583,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 5.41708335745316,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.9635502565514926,
              t120d_eyeball_count: 64196,
              t120d_request_count: 1262,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.0369018590333752,
            },
            total: 0.008681845636187261,
          },
          etdInfo: {
            dropoffETARange: {
              min: 20,
              max: 35,
              raw: 30,
            },
          },
          fareInfo: {
            serviceFee: 100,
            dynamicBookingFeeTier: 2,
          },
          scheduleTimeSlots: null,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 35.4631,
        longitude: 139.5315,
        zIndex: 9991,
        description: {
          title: "餃子の王将 二俣川駅前",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.5",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "e493455f-c146-5635-aded-be9431df27ea",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "e493455f-c146-5635-aded-be9431df27ea",
      title: {
        text: "ケンタッキーフライドチキン希望ヶ丘店",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#545454"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "配達手数料 ¥200",
          textFormat:
            '<span><span style="color:#3a3a48">配達手数料 ¥200</span></span>',
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "配達手数料 ¥200",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "15–30 分",
          accessibilityText: "お届けまで 15～30 分です",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.6",
        accessibilityText:
          "5 つ星のうち 4.6 の評価を獲得した上位のレストラン 200 件以上の評価に基づいています。",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/%E3%82%B1%E3%83%B3%E3%82%BF%E3%83%83%E3%82%AD%E3%83%BC%E3%83%95%E3%83%A9%E3%82%A4%E3%83%88%E3%83%81%E3%82%AD%E3%83%B3%E5%B8%8C%E6%9C%9B%E3%83%B6%E4%B8%98%E5%BA%97/5JNFX8FGVjWt7b6UMd8n6g?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7ac3cdc947738edd49d9fcc0b595157b/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7ac3cdc947738edd49d9fcc0b595157b/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7ac3cdc947738edd49d9fcc0b595157b/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7ac3cdc947738edd49d9fcc0b595157b/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7ac3cdc947738edd49d9fcc0b595157b/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/7ac3cdc947738edd49d9fcc0b595157b/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            analytics_config_library_enabled: "true",
          },
        },
        storePayload: {
          storeUUID: "e493455f-c146-5635-aded-be9431df27ea",
          isOrderable: true,
          score: {
            breakdown: {
              FinalScore: 0.0073991846108179314,
              FinalScorePreCalibration: 0.009743021259307861,
              PredictionScore: 0.007389184610817932,
              PredictionScorePreCalibration: 0.009733021259307861,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 4.917081122852075,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.9561454419630981,
              t120d_eyeball_count: 59460,
              t120d_request_count: 1108,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.04156459406838001,
            },
            total: 0.0073991846108179314,
          },
          etdInfo: {
            dropoffETARange: {
              min: 15,
              max: 30,
              raw: 25,
            },
          },
          fareInfo: {
            serviceFee: 200,
            dynamicBookingFeeTier: 4,
          },
          scheduleTimeSlots: null,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 35.4604,
        longitude: 139.5151,
        zIndex: 9989,
        description: {
          title: "ケンタッキーフライドチキン希望ヶ丘店",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.6",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "50272c85-ccc7-4343-9346-51180411bb33",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "50272c85-ccc7-4343-9346-51180411bb33",
      title: {
        text: "丸亀製麺 横浜旭",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#545454"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "配達手数料 ¥50",
          textFormat:
            '<span><span style="color:#3a3a48">配達手数料 ¥50</span></span>',
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "配達手数料 ¥50",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "15–30 分",
          accessibilityText: "お届けまで 15～30 分です",
          badgeType: "ETD",
        },
      ],
      actionUrl:
        "/store/%E4%B8%B8%E4%BA%80%E8%A3%BD%E9%BA%BA-%E6%A8%AA%E6%B5%9C%E6%97%AD/UCcshczHQ0OTRlEYBBG7Mw?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://d1ralsognjng37.cloudfront.net/bf077aff-4d59-44d5-a886-ce65ce174ece.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/7caeef7b-9491-4caa-a769-e41d600eb090.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/3b322495-fa76-463e-8116-af1b03494247.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/32f43664-31c4-4b0c-946c-d47c306059a1.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/8aa63dc3-8cdd-47da-88cb-5eb4068b7f78.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/b39c6d06-78ca-431c-9d35-1f2c55b3aa4b.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            analytics_config_library_enabled: "true",
          },
        },
        storePayload: {
          storeUUID: "50272c85-ccc7-4343-9346-51180411bb33",
          isOrderable: true,
          score: {
            breakdown: {
              FinalScore: 0.006352084300189646,
              FinalScorePreCalibration: 0.008354829082489013,
              PredictionScore: 0.006342084300189646,
              PredictionScorePreCalibration: 0.008344829082489014,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 4.586116014381741,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.959904719639996,
              t120d_eyeball_count: 55,
              t120d_request_count: 1,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 1.3474706341695821,
            },
            total: 0.006352084300189646,
          },
          etdInfo: {
            dropoffETARange: {
              min: 15,
              max: 30,
              raw: 25,
            },
          },
          fareInfo: {
            serviceFee: 50,
            dynamicBookingFeeTier: 1,
          },
          scheduleTimeSlots: null,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 35.4616,
        longitude: 139.5231,
        zIndex: 9988,
        description: {
          title: "丸亀製麺 横浜旭",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          icon: "RESTAURANT",
          size: "SPACING_UNIT_4X",
        },
        secondaryMarkerContent: {
          color: "CONTENT_POSITIVE",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_POSITIVE",
          text: "New",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "14732ddc-7dd6-42e5-9e93-2adc2f649fda",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "14732ddc-7dd6-42e5-9e93-2adc2f649fda",
      title: {
        text: "かつや 希望ヶ丘店",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#545454"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "配達手数料 ¥250",
          textFormat:
            '<span><span style="color:#3a3a48">配達手数料 ¥250</span></span>',
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "配達手数料 ¥250",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "15–30 分",
          accessibilityText: "お届けまで 15～30 分です",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.5",
        accessibilityText:
          "5 つ星のうち 4.5 の評価を獲得 77 件の評価に基づいています。",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/%E3%81%8B%E3%81%A4%E3%82%84-%E5%B8%8C%E6%9C%9B%E3%83%B6%E4%B8%98%E5%BA%97/FHMt3H3WQuWekyrcL2Sf2g?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://d1ralsognjng37.cloudfront.net/f1e1f583-649a-412a-b79e-3bb46728a35b.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/b0d68a32-da53-4cb6-af30-357f8cba6561.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/81288fe4-7797-4926-b648-ce0b6f0afb33.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/17137cac-dad4-4362-ae5e-00046db0236e.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/60f52821-e471-47cf-93c7-0f229192bb56.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/7927bc70-1708-45d8-ada2-7fa3abaec50b.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            analytics_config_library_enabled: "true",
          },
        },
        storePayload: {
          storeUUID: "14732ddc-7dd6-42e5-9e93-2adc2f649fda",
          isOrderable: true,
          score: {
            breakdown: {
              FinalScore: 0.006328502146231849,
              FinalScorePreCalibration: 0.008323596248626709,
              PredictionScore: 0.00631850214623185,
              PredictionScorePreCalibration: 0.008313596248626709,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 4.277989785238475,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.956807583913635,
              t120d_eyeball_count: 46383,
              t120d_request_count: 1041,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.050918385689457495,
            },
            total: 0.006328502146231849,
          },
          etdInfo: {
            dropoffETARange: {
              min: 15,
              max: 30,
              raw: 25,
            },
          },
          fareInfo: {
            serviceFee: 250,
            dynamicBookingFeeTier: 5,
          },
          scheduleTimeSlots: null,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 35.4617,
        longitude: 139.513,
        zIndex: 9987,
        description: {
          title: "かつや 希望ヶ丘店",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.5",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "ddb4bcc2-7b28-5215-8cc8-84979a837bcc",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "ddb4bcc2-7b28-5215-8cc8-84979a837bcc",
      title: {
        text: "カレーハウスCoCo壱番屋 二俣川駅前店",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#545454"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "配達手数料 ¥50",
          textFormat:
            '<span><span style="color:#3a3a48">配達手数料 ¥50</span></span>',
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "配達手数料 ¥50",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "10–25 分",
          accessibilityText: "お届けまで 10～25 分です",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.7",
        accessibilityText:
          "5 つ星のうち 4.7 の評価を獲得した上位のレストラン 77 件の評価に基づいています。",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/%E3%82%AB%E3%83%AC%E3%83%BC%E3%83%8F%E3%82%A6%E3%82%B9coco%E5%A3%B1%E7%95%AA%E5%B1%8B-%E4%BA%8C%E4%BF%A3%E5%B7%9D%E9%A7%85%E5%89%8D%E5%BA%97/3bS8wnsoUhWMyISXmoN7zA?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://d1ralsognjng37.cloudfront.net/68503604-c500-4769-bc4c-c1c2ebbbec90.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/d026bbaf-37cc-4ea2-984e-f207c307fbb2.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/bc0c53f8-396b-42aa-bf38-b8d917df1bf2.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/2f026e85-9433-4494-ab2d-37e0c053c8be.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/44c64e0d-1a8e-4d28-b309-9c8e70cd21dd.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://d1ralsognjng37.cloudfront.net/85b0124b-5bc2-491c-a4f9-901b00313461.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            analytics_config_library_enabled: "true",
          },
        },
        storePayload: {
          storeUUID: "ddb4bcc2-7b28-5215-8cc8-84979a837bcc",
          isOrderable: true,
          score: {
            breakdown: {
              FinalScore: 0.005962261569877926,
              FinalScorePreCalibration: 0.007838712463378906,
              PredictionScore: 0.0059522615698779265,
              PredictionScorePreCalibration: 0.007828712463378906,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 5.907849392125309,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.9643006469799789,
              t120d_eyeball_count: 18822,
              t120d_request_count: 96,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.0823559678890383,
            },
            total: 0.005962261569877926,
          },
          etdInfo: {
            dropoffETARange: {
              min: 10,
              max: 25,
              raw: 20,
            },
          },
          fareInfo: {
            serviceFee: 50,
            dynamicBookingFeeTier: 1,
          },
          scheduleTimeSlots: null,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 35.4647,
        longitude: 139.5315,
        zIndex: 9986,
        description: {
          title: "カレーハウスCoCo壱番屋 二俣川駅前店",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.7",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
  {
    uuid: "6fef04da-7c73-4751-bb9e-f7cf194878f3",
    type: "REGULAR_STORE",
    store: {
      storeUuid: "6fef04da-7c73-4751-bb9e-f7cf194878f3",
      title: {
        text: "スターバックス コーヒー ジョイナステラス二俣川店 Starbucks JOINUS TERRACE Futamatagawa",
      },
      meta: [
        {
          textFormat:
            '<span style="color:#545454"><img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png" width="14" height="14" vertical-align="middle"/></span>',
          badgeType: "MembershipBenefit",
          badgeDataWithFallback: {
            membership: {
              brandingType: "UBER_ONE",
            },
            type: "membership",
          },
        },
        {
          text: "配達手数料 ¥350",
          textFormat:
            '<span><span style="color:#3a3a48">配達手数料 ¥350</span></span>',
          badgeType: "FARE",
          badgeData: {
            fare: {
              isSurge: false,
              deliveryFee: "配達手数料 ¥350",
              serviceFee: "",
            },
            type: "fare",
          },
        },
        {
          text: "10–25 分",
          accessibilityText: "お届けまで 10～25 分です",
          badgeType: "ETD",
        },
      ],
      rating: {
        text: "4.8",
        accessibilityText:
          "5 つ星のうち 4.8 の評価を獲得した上位のレストラン 54 件の評価に基づいています。",
        badgeType: "RATINGS",
      },
      actionUrl:
        "/store/%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%8F%E3%83%83%E3%82%AF%E3%82%B9-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC-%E3%82%B7%E3%83%A7%E3%82%A4%E3%83%8A%E3%82%B9%E3%83%86%E3%83%A9%E3%82%B9%E4%BA%8C%E4%BF%A3%E5%B7%9D%E5%BA%97-starbucks-joinus-terrace-futamatagawa/b-8E2nxzR1G7nvfPGUh48w?diningMode=DELIVERY",
      favorite: false,
      image: {
        items: [
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c3623bbf78afc872688d5e238628b948/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            width: 2880,
            height: 2304,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c3623bbf78afc872688d5e238628b948/719c6bd2757b08684c0faae44d43159d.jpeg",
            width: 1080,
            height: 864,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c3623bbf78afc872688d5e238628b948/93b5fd796682c6d5302cd5bec164fe90.jpeg",
            width: 750,
            height: 600,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c3623bbf78afc872688d5e238628b948/97e6648b3593c29cb4a6335f976e6d84.jpeg",
            width: 640,
            height: 512,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c3623bbf78afc872688d5e238628b948/a70f5c9df440d10213e93244e9eb7cad.jpeg",
            width: 550,
            height: 440,
          },
          {
            url: "https://tb-static.uber.com/prod/image-proc/processed_images/c3623bbf78afc872688d5e238628b948/97ef7458dde62fa918635bc21265d9f5.jpeg",
            width: 240,
            height: 192,
          },
        ],
      },
      signposts: null,
      tracking: {
        metaInfo: {
          pluginName: "StorefrontFeedPlugin",
          analyticsLabel: "store_front",
          verticalType: "UNKNOWN",
          category: "",
          subcategory: "",
          surfaceAreaV2: "HOME_FEED",
          additionalTrackingData: {
            analytics_config_library_enabled: "true",
          },
        },
        storePayload: {
          storeUUID: "6fef04da-7c73-4751-bb9e-f7cf194878f3",
          isOrderable: true,
          score: {
            breakdown: {
              FinalScore: 0.005757018106229198,
              FinalScorePreCalibration: 0.0075671238994598385,
              PredictionScore: 0.005747018106229199,
              PredictionScorePreCalibration: 0.007557123899459839,
              net_inflow_boosting_factor: 0,
              net_inflow_partial_score: 3.528788100274046,
              service_quality_boosting_factor: 0,
              service_quality_partial_score: 0.9522002058512412,
              t120d_eyeball_count: 23996,
              t120d_request_count: 603,
              ucb_bandit_boosting_factor: 0,
              ucb_bandit_partial_score: 0.07424253330847984,
            },
            total: 0.005757018106229198,
          },
          etdInfo: {
            dropoffETARange: {
              min: 10,
              max: 25,
              raw: 20,
            },
          },
          fareInfo: {
            serviceFee: 350,
            dynamicBookingFeeTier: 7,
          },
          scheduleTimeSlots: null,
          storeAvailablityState: "UNKNOWN",
        },
      },
      mapMarker: {
        latitude: 35.4632,
        longitude: 139.5321,
        zIndex: 9985,
        description: {
          title:
            "スターバックス コーヒー ジョイナステラス二俣川店 Starbucks JOINUS TERRACE Futamatagawa",
          color: "CONTENT_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedColor: "CONTENT_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_PRIMARY",
        },
        markerContent: {
          color: "CONTENT_PRIMARY",
          selectedColor: "CONTENT_INVERSE_PRIMARY",
          backgroundColor: "BACKGROUND_PRIMARY",
          selectedBackgroundColor: "BACKGROUND_INVERSE_PRIMARY",
          text: "4.8",
          size: "SPACING_UNIT_4X",
        },
      },
      meta2: null,
      storyIconPayload: {
        isIconVisible: false,
      },
      endorsements: null,
      meta4: null,
    },
    analyticsLabel: "store_front",
  },
];

const Title = () => {
  return (
    <a href="/">
      <div>
        <img className="logo" alt="logo" src={logo}></img>
      </div>
    </a>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav-bar">
        <ul>
          <li>
            <a href="/">
              <img src="https://cdn-icons-png.flaticon.com/512/834/834179.png?w=826&t=st=1673533214~exp=1673533814~hmac=4884327c812284a5b4767fc21814ea750091ececab4e37ecb57a8c238b6d0224"></img>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="https://cdn-icons-png.flaticon.com/512/1067/1067566.png?w=826&t=st=1673533030~exp=1673533630~hmac=0b04d93b13e350d12455f587bbd036bee1d60bc24b578d439b708724b02de69c"></img>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="https://cdn-icons-png.flaticon.com/512/1067/1067566.png?w=826&t=st=1673533030~exp=1673533630~hmac=0b04d93b13e350d12455f587bbd036bee1d60bc24b578d439b708724b02de69c"></img>
            </a>
          </li>
          <li>
            <a href="/">
              <img src="https://cdn-icons-png.flaticon.com/512/1082/1082874.png?w=826&t=st=1673532525~exp=1673533125~hmac=212b26c12b8b3c27fd2e3252819e0588a96c14b8ede4aad9b35f9a6b04895337"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const RestroCard = (props) => {
  return (
    <div className="card">
      <img src={props.image?.items[0].url}></img>
      <h2>{props.title?.text}</h2>
      <h4>{props.rating?.text} star</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="card-list">
      {restaurantList.map((a) => {
        return <RestroCard {...a.store} key={a.uuid} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
