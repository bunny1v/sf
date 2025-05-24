'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9e5937fb0a35ef0bb56eaf3d6d6e7965",
"assets/AssetManifest.bin.json": "08901e46900dcd25e414d6bda93b7518",
"assets/AssetManifest.json": "2b0b189290229c8471cc5aeebbe6e577",
"assets/assets/api-data.json": "1a3013e2ef573d5b3a7ba60212618704",
"assets/assets/Artificial%2520Intelligence/quizzes/AI_Applications.json": "7a5811fc05400add12bd94cfb4d1b0b2",
"assets/assets/Artificial%2520Intelligence/quizzes/AI_Ethics_and_Governance.json": "c410d08bc4734c4a1f797a58d0c8c6b6",
"assets/assets/Artificial%2520Intelligence/quizzes/AI_Fundamentals.json": "25c9d1aeec02fc895631da6617f0022f",
"assets/assets/Artificial%2520Intelligence/quizzes/AI_Model_Deployment.json": "b8b02703da39c76b6ba106e6b0aefc21",
"assets/assets/Artificial%2520Intelligence/quizzes/AI_System_Design.json": "e174fe4a0225673aa63af963f4ff001b",
"assets/assets/Artificial%2520Intelligence/quizzes/Computer_Vision.json": "359815565d5d9675ab70717c4a1ed625",
"assets/assets/Artificial%2520Intelligence/quizzes/Computer_Vision_AI.json": "1af9d5df7b2aa09f40d051284a1547cc",
"assets/assets/Artificial%2520Intelligence/quizzes/Future_of_AI.json": "096cc5956c452cc7066c6745c288ee4e",
"assets/assets/Artificial%2520Intelligence/quizzes/Generative_AI.json": "692f2ac41e36b45b5b2981f0c3252143",
"assets/assets/Artificial%2520Intelligence/quizzes/Natural_Language_Processing_AI.json": "3d7a350e2cd4caef2a72b3d87cadc83e",
"assets/assets/Artificial%2520Intelligence/quizzes/Neural_Networks.json": "03828eec8be09ffdb6f65704ff91a777",
"assets/assets/Blockchain/quizzes/Blockchain_Architecture.json": "ab8fd726471a43a3cb9e2965a9f64a53",
"assets/assets/Blockchain/quizzes/Blockchain_Fundamentals.json": "dce14040d85eb66a68cfb6b2133e9fe0",
"assets/assets/Blockchain/quizzes/Blockchain_Platforms.json": "ba0209095c74062682a51f6daf374515",
"assets/assets/Blockchain/quizzes/Blockchain_Use_Cases.json": "8b0373b910562f7221a411f623a1faca",
"assets/assets/Blockchain/quizzes/Consensus_Mechanisms.json": "8f491ec11a0ddea9be4e5e006a13fee7",
"assets/assets/Blockchain/quizzes/Cryptography_and_Security.json": "ea39cc247e1f99240ad92ad5b7f773df",
"assets/assets/Blockchain/quizzes/Decentralized_Applications.json": "7db0531a5a904e052dd43ca7f6300ea3",
"assets/assets/Blockchain/quizzes/Future_of_Blockchain.json": "c3a79d6414ebea72e4def6c260cd9c03",
"assets/assets/Blockchain/quizzes/Smart_Contracts.json": "c89bd828b115530f3386048118577a48",
"assets/assets/Blockchain/quizzes/Web3_Development.json": "952052e313d1a04a08a363a1c382e3e7",
"assets/assets/blog_data.json": "856b13ac77a2366ef380ee24ffa3de9b",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Architecture_Design.json": "00e19c18a8f8ddc38c7e44c5a968dbcd",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Cost_Management.json": "400f471ee56b3273456e060a4f691e42",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Deployment_Models.json": "ce40b21e4eaa9721cd0eecc75e91916e",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Fundamentals.json": "8d40f5b6c2f8917952100e39e86867d9",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Infrastructure_Management.json": "11dc4ef256d31457c9d4a02ba599c09b",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Migration_and_Integration.json": "aa70b43bdc2d24b039c3d1f0e4f46fc0",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Networking.json": "368ce0b4aee195e8cb5be191d6273cd9",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Security_and_Compliance.json": "3738eeb277a6b8c79574a8d5649cb06d",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Service_Models.json": "8dc6ad4ca8c1be48667067b7683c8567",
"assets/assets/Cloud%2520Computing/quizzes/Cloud_Storage_Solutions.json": "010066b7defec850f5d5f1d386281ae9",
"assets/assets/Cloud%2520Computing/quizzes/Containerization_and_Orchestration.json": "185b4b2685632a2dbf693d21fdfacaf4",
"assets/assets/Cloud%2520Computing/quizzes/DevOps_in_Cloud.json": "05b4449169f15547cce812209bc74e5d",
"assets/assets/Cloud%2520Computing/quizzes/Multi_Cloud_Strategies.json": "772221e353f46fde2ba2dd8b49d15d02",
"assets/assets/Cloud%2520Computing/quizzes/Serverless_Computing.json": "d0456bf7aa9f8dc16fc04e2a8571e6e0",
"assets/assets/course_images/Data%2520Analytics.jpeg": "d2dc1d4d45e2c928508423e0ecbbcbe8",
"assets/assets/course_images/Data%2520Science.jpeg": "d2dc1d4d45e2c928508423e0ecbbcbe8",
"assets/assets/course_images/Machine%2520Learning.jpeg": "613bce524f4f14aee60b44cae9768827",
"assets/assets/course_images/Numpy.jpeg": "d2dc1d4d45e2c928508423e0ecbbcbe8",
"assets/assets/course_images/Pandas.jpeg": "d2dc1d4d45e2c928508423e0ecbbcbe8",
"assets/assets/course_images/Python%2520Programming.jpeg": "6c494598df48fa5f7dfe710546f7e515",
"assets/assets/course_images/Web%2520Development.jpeg": "78aa7c20bc37430b846f12e47ef6505f",
"assets/assets/course_list.json": "4458b6d93761cf16797508d57849db2e",
"assets/assets/Cybersecurity/quizzes/Application_Security.json": "1a9658ce48429d8bb2d0b4045de1f510",
"assets/assets/Cybersecurity/quizzes/Cloud_Security.json": "ece96ccc0829cb0f3fcd9c68d9da5055",
"assets/assets/Cybersecurity/quizzes/Cryptography.json": "749d31d7cea8c4cbf97f282c980ebda4",
"assets/assets/Cybersecurity/quizzes/Ethical_Hacking.json": "d1288111cc201a7b6dd255e1b7224810",
"assets/assets/Cybersecurity/quizzes/Incident_Response.json": "39effec62a436e745917db3c1e730508",
"assets/assets/Cybersecurity/quizzes/Network_Security.json": "ba1251e211549d15f5131654c80733a3",
"assets/assets/Cybersecurity/quizzes/Security_Compliance.json": "accd01e81725470b86cec94c44e42f0c",
"assets/assets/Cybersecurity/quizzes/Security_Fundamentals.json": "bb65ede99fd85923ff4b32244d1d011c",
"assets/assets/Cybersecurity/quizzes/Security_Operations.json": "479617aebaa791e4fe16e25389191122",
"assets/assets/Cybersecurity/quizzes/Threat_Intelligence.json": "2d237158e71311e3c38b0304bc5241bb",
"assets/assets/Data%2520Analytics/quizzes/Big_Data_Management_and_Analytics.json": "32b885f9bc33604a66ae6f8e26344f36",
"assets/assets/Data%2520Analytics/quizzes/Data_Analytics_Lifecycle.json": "fc7b98671e15a537beea685688c76ce1",
"assets/assets/Data%2520Analytics/quizzes/Data_Quality_and_Governance.json": "16cd9fed8a20475ae9d16e25ea6dd237",
"assets/assets/Data%2520Analytics/quizzes/Data_Visualization_and_Communication.json": "f151e71acf36a8666688a7795430d281",
"assets/assets/Data%2520Analytics/quizzes/Data_Warehousing_and_ETL.json": "03aa005f965ef79b6cf5fa76e8ca3b2f",
"assets/assets/Data%2520Analytics/quizzes/Exploratory_Data_Analysis.json": "7fba278030a5691d4b47ccb5ce94d18e",
"assets/assets/Data%2520Analytics/quizzes/Predictive_Modeling_Techniques.json": "a4b1ac7572802ccb53c388c3a95518c7",
"assets/assets/Data%2520Analytics/quizzes/Statistical_Foundations_for_Analytics.json": "58739a17e8a78be6d9745e45314a603c",
"assets/assets/Data%2520Science/quizzes/Databases_and_Big_Data_Technologies.json": "1998b02598e0f42ffc75744008d5ffbc",
"assets/assets/Data%2520Science/quizzes/Data_Collection_and_Preparation.json": "e52b799b6b2717329b1772f8bad4d59f",
"assets/assets/Data%2520Science/quizzes/Data_Mining_and_Data_Wrangling.json": "4072f86e81668795cb0927448974a34b",
"assets/assets/Data%2520Science/quizzes/Data_Science_Fundamentals.json": "1926b2a6803e114b0c3ab360d8224b72",
"assets/assets/Data%2520Science/quizzes/Data_Visualization.json": "ec6cf17d4a853d227baf1d14ceb6423a",
"assets/assets/Data%2520Science/quizzes/Deep_Learning.json": "b6bf1183a5c8426c38d0bf87500449c7",
"assets/assets/Data%2520Science/quizzes/Domain_Specific_Applications.json": "627ea6c10fbd8bb1e300bacab8de78ea",
"assets/assets/Data%2520Science/quizzes/Ethics_and_Data_Privacy.json": "42da2d9ab041bf37d33867ae415320da",
"assets/assets/Data%2520Science/quizzes/Exploratory_Data_Analysis.json": "f38ab2368fe998d5938bf4052ffda674",
"assets/assets/Data%2520Science/quizzes/Machine_Learning.json": "6dd99bdbb20d4d5d70e828309a11bdb7",
"assets/assets/Data%2520Science/quizzes/Statistics_and_Probability.json": "434edf3e01d56f395106909712ff1321",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Advanced_Data_Structures.json": "244cb8fd78fbfc3bacd842b949ce92e9",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Algorithm_Analysis.json": "2676847095b46d02f39c17dd5cb3c266",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Algorithm_Design_Techniques.json": "ddd1b5f33ed30ebd3232ad5c061cff08",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Basic_Data_Structures.json": "a6b1126cd5852e44c684d91f3638efb5",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Competitive_Programming.json": "8f75d213f8f6de5c9657546d813b1b86",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Dynamic_Programming.json": "1ed1eb4dc6bf317fd4354af3e1233367",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Graph_Algorithms.json": "2f0d5af82e0c9111ddc969884c82ae54",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Greedy_Algorithms.json": "e64d3eb926ce9dad78e2402cd68e66b2",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Interview_Preparation.json": "9f3c89f40ab90bd0efca7ae8cc98f81d",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Problem_Solving_Strategies.json": "a254b87aed5281720db69768678be0ab",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Sorting_and_Searching.json": "9a47823d2b0ef8aeb9fa551b4af789d9",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Space_Time_Complexity.json": "6823e05705d6326e7baf88879244b6c6",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/String_Algorithms.json": "2fc75832ee08b06f6abb776e094d7a4d",
"assets/assets/Data%2520Structures%2520and%2520Algorithms/quizzes/Tree_Algorithms.json": "78563d24f26912fbedcdf09e51323f6d",
"assets/assets/DevOps/quizzes/Cloud_DevOps.json": "812274981c8ff9fc15e8ca9c610bf1cc",
"assets/assets/DevOps/quizzes/Configuration_Management.json": "a937d5506e6b0486665dda5b992edcab",
"assets/assets/DevOps/quizzes/Continuous_Deployment.json": "b5e65c4ab8c189f1b9ef5e66a540826c",
"assets/assets/DevOps/quizzes/Continuous_Integration.json": "5c67dfd46a1bfc921966c1f01d7dd0f4",
"assets/assets/DevOps/quizzes/DevOps_Best_Practices.json": "15c16356cfb9075aed35842f3c50aa92",
"assets/assets/DevOps/quizzes/DevOps_Fundamentals.json": "436742d8a91c5e38317efe50f5ac0186",
"assets/assets/DevOps/quizzes/DevOps_Security.json": "37d2f5b4c241ea9c4f61cd0b5b44057f",
"assets/assets/DevOps/quizzes/DevOps_Tools_and_Automation.json": "454696ed435d8c8613a436cc9f201763",
"assets/assets/DevOps/quizzes/Infrastructure_as_Code.json": "fed38bb7e9740c05b52800b4effcce2b",
"assets/assets/DevOps/quizzes/Monitoring_and_Logging.json": "46ceb26b040278433027165ca4fae0c6",
"assets/assets/Docker/quizzes/Container_Basics.json": "5b81bde84391066c3faa1418c9402c7d",
"assets/assets/Docker/quizzes/Container_Lifecycle_Management.json": "deaf9c75c4f8f4ed82726a164bbfa728",
"assets/assets/Docker/quizzes/Dockerfile_and_Image_Creation.json": "a8b59ff5d01e98d354cdce0976bf48e0",
"assets/assets/Docker/quizzes/Docker_Best_Practices.json": "fa80032dade434ee61043342fdf277e5",
"assets/assets/Docker/quizzes/Docker_Compose.json": "4b3e47374025ec0e6257f2fad55123be",
"assets/assets/Docker/quizzes/Docker_Fundamentals.json": "ef4421c000736dc852066845a2c9979b",
"assets/assets/Docker/quizzes/Docker_in_Production.json": "2b340912c5899516f0f8aa1f912276c9",
"assets/assets/Docker/quizzes/Docker_Monitoring_and_Logging.json": "46c2c2bd5a585695651703b92e927911",
"assets/assets/Docker/quizzes/Docker_Networking.json": "b207a61d1301fbe004845602053913f6",
"assets/assets/Docker/quizzes/Docker_Registry_and_Distribution.json": "9479ea0c6494d42cd6b81b7c7bade48f",
"assets/assets/Docker/quizzes/Docker_Security.json": "ab5a6711867e925ca0aeb3564702ad60",
"assets/assets/Docker/quizzes/Docker_Storage_and_Volumes.json": "c2b5d9f7cd4b1b97562b53715ed7e236",
"assets/assets/explore.json": "76c0c9f252c6e278bfe6ac4d9c953d78",
"assets/assets/faqs.json": "36105de58a4b1099557a83c2698c7bdf",
"assets/assets/files.js": "8b8c865c2de7aca4af5b1ad0152710c3",
"assets/assets/Internet%2520of%2520Things/quizzes/Edge_Computing.json": "ff52771f7a1e06dda1280421802d33ac",
"assets/assets/Internet%2520of%2520Things/quizzes/Future_of_IoT.json": "ead94cd12182363d5e8e718bde22072b",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Applications.json": "267daed3bbd5758a00ac87c4a07d26dc",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Architecture.json": "b0ab9212e76908265265c45e142a3405",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Data_Analytics.json": "faac0c533409195ce4f4aea8e8412dc5",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Fundamentals.json": "99159c1ca9125927e35896b6cc7ed51e",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Platforms.json": "f8a90c012b1b57ae54fcffeab9308051",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Protocols.json": "fbd3cbf464fb62a9dd2763eb1b9840ac",
"assets/assets/Internet%2520of%2520Things/quizzes/IoT_Security.json": "fd98bf171dfd16a9a41c9c26ab4db0ee",
"assets/assets/Internet%2520of%2520Things/quizzes/Sensors_and_Actuators.json": "88110fe0766dd27bf1bae2f21a2fb6e6",
"assets/assets/Kubernetes/quizzes/Advanced_Kubernetes_Concepts.json": "d37bb955665317b74eaf28f8a43f6c49",
"assets/assets/Kubernetes/quizzes/CI_CD_with_Kubernetes.json": "d041fed3055a672a7b6c4f13b58a1bcc",
"assets/assets/Kubernetes/quizzes/Cluster_Management.json": "2ae2b1067b9dfb11e2eb63ab702592d4",
"assets/assets/Kubernetes/quizzes/Configuration_and_Security.json": "9e6f2eeb7beccb48018991bd00ad2a57",
"assets/assets/Kubernetes/quizzes/Deployments_and_StatefulSets.json": "85de97a158f66e52b436eef3f51f0f70",
"assets/assets/Kubernetes/quizzes/Kubernetes_Architecture.json": "7957aea41069e4e10d509cd3ee35e7d9",
"assets/assets/Kubernetes/quizzes/Monitoring_and_Logging.json": "f87e0f6b357ae52013e318155f29cf8d",
"assets/assets/Kubernetes/quizzes/Pod_Lifecycle_and_Design.json": "2e3259ac8233372cb1a1edf1c883c250",
"assets/assets/Kubernetes/quizzes/Resource_Management.json": "c2e2758537173e9941c2e68138cc63a9",
"assets/assets/Kubernetes/quizzes/Scaling_and_Performance.json": "071578de0a78d0156e8c69e6729175d7",
"assets/assets/Kubernetes/quizzes/Services_and_Networking.json": "b66548ac78162c63efaa344d3c410f8e",
"assets/assets/Kubernetes/quizzes/Storage_and_Persistence.json": "47c0c0ef477c4e3b91f3ade87794fa1b",
"assets/assets/Machine%2520Learning/quizzes/Advanced_Topics_in_ML.json": "1336d699f39a080102a710a66ee5c0e9",
"assets/assets/Machine%2520Learning/quizzes/Computer_Vision.json": "6554fe2cbf4e6d3700a6d06fa29479a4",
"assets/assets/Machine%2520Learning/quizzes/Deep_Learning_Foundations.json": "d06e4e129d39f281087f20c8e0680e2f",
"assets/assets/Machine%2520Learning/quizzes/Deployment_and_Productionization.json": "a476f6d10a9f899c984db328aea3e68d",
"assets/assets/Machine%2520Learning/quizzes/Dimensionality_Reduction.json": "a09d2bda2818bd452b998067e417db4c",
"assets/assets/Machine%2520Learning/quizzes/Ethical_Considerations_in_ML.json": "7371c7963b951b64179b625214fe0d1b",
"assets/assets/Machine%2520Learning/quizzes/Feature_Engineering_and_Selection.json": "00ce10f840f05844e62c48bb5acd62f8",
"assets/assets/Machine%2520Learning/quizzes/Machine_Learning_Fundamentals.json": "02e8cfe0bee9a2d3649e26df449036ed",
"assets/assets/Machine%2520Learning/quizzes/Model_Evaluation_and_Selection.json": "da9f2dfc14bdafb71534261151f06560",
"assets/assets/Machine%2520Learning/quizzes/Natural_Language_Processing.json": "3c549c9ac5e8cc3a961379a79ef4cb03",
"assets/assets/Machine%2520Learning/quizzes/Reinforcement_Learning.json": "9f55044dde3e40ab4368359ddf47c66f",
"assets/assets/Machine%2520Learning/quizzes/Supervised_Learning.json": "525f68f5584e0d75dd3cc61515015549",
"assets/assets/Machine%2520Learning/quizzes/Time_Series_Analysis.json": "1923231514310ca3a3d525f2305ed275",
"assets/assets/Machine%2520Learning/quizzes/Unsupervised_Learning.json": "47b2ac000dc64d2690abc67a18f16c90",
"assets/assets/mentors.json": "f1a14c41eb74b267251802ecafb62a85",
"assets/assets/names.txt": "3fc5149e7dcfc1508974925d16e6f055",
"assets/assets/Numpy/quizzes/Advanced_Topics.json": "62ff9c8a7d2fe958d7ad3dcd314fa3e6",
"assets/assets/Numpy/quizzes/Array_Indexing_and_Slicing.json": "ab44bed0fd930fcddd77516e5dab34cd",
"assets/assets/Numpy/quizzes/Array_Manipulation.json": "9753d3df5cf2e89ac077578da6697e36",
"assets/assets/Numpy/quizzes/Basic_Array_Operations.json": "5ff6844fffe9bf8e2aae5bcef29fb853",
"assets/assets/Numpy/quizzes/Broadcasting.json": "b12da71a1799dcd5cd0b52c261dc234e",
"assets/assets/Numpy/quizzes/Creating_NumPy_Arrays.json": "a828b5f6fe9d5e84dcdbe45f23d9c91e",
"assets/assets/Numpy/quizzes/Introduction_to_NumPy.json": "53b154c274e68f633bbaac21b51277ee",
"assets/assets/Numpy/quizzes/Mathematical_Functions.json": "1e7ff249061cb6129fe7513696e06044",
"assets/assets/Numpy/quizzes/Working_with_Files.json": "d0f3e838989d2c6e6d9d104ad50bc93a",
"assets/assets/Pandas/quizzes/Creating_and_Reading_Data.json": "c5bb82f558bb9ed135c97d10bc9a4d5c",
"assets/assets/Pandas/quizzes/Data_Aggregation_and_Grouping.json": "339fda023afe6d383cfa67f93f8a4161",
"assets/assets/Pandas/quizzes/Data_Cleaning.json": "ea610c206ef4f97da8a337cfb3e6b07c",
"assets/assets/Pandas/quizzes/Data_Exploration.json": "14b3d73e414c7f1cbe7c56622ce099cc",
"assets/assets/Pandas/quizzes/Data_Manipulation.json": "5fae1faca5431266598182d98a95bb14",
"assets/assets/Pandas/quizzes/Data_Visualization.json": "1574965fe29a490b17c3d032c86d532f",
"assets/assets/Pandas/quizzes/Introduction_to_Pandas.json": "1f39a2072223587d7ff539ba81bdee9a",
"assets/assets/Pandas/quizzes/Merging_and_Joining_Data.json": "a46d302059ad9084f04d2d02305ae988",
"assets/assets/Pandas/quizzes/Time_Series_Data.json": "5ef1e93318ec2f7f3fbde29e8cb321a8",
"assets/assets/Personality%2520Development/quizzes/Communication_Skills.json": "f459a0c53fd20a82ad0a7f53b3c0253d",
"assets/assets/Personality%2520Development/quizzes/Conflict_Resolution.json": "fe8a3fb49ff24ea6cf2c197332420683",
"assets/assets/Personality%2520Development/quizzes/Emotional_Intelligence.json": "107254131fc7b6b159d6686b9adde419",
"assets/assets/Personality%2520Development/quizzes/Goal_Setting_and_Achievement.json": "7b508a808f6cbd3fa354e4fd39024202",
"assets/assets/Personality%2520Development/quizzes/Leadership_Development.json": "8af5548a3e009234d4c6504dba96e3ea",
"assets/assets/Personality%2520Development/quizzes/Networking_Skills.json": "faf66ce2f4dc9a56bb3cedc48653c119",
"assets/assets/Personality%2520Development/quizzes/Personal_Branding.json": "5ada00978e24d9d9aa665932fe5f0878",
"assets/assets/Personality%2520Development/quizzes/Professional_Etiquette.json": "51af102b93735c1f8c56fad04b82e994",
"assets/assets/Personality%2520Development/quizzes/Public_Speaking.json": "462f05077e343bf199573c7da9eb1e88",
"assets/assets/Personality%2520Development/quizzes/Self_Awareness_and_Growth.json": "8cdaebea6c10039f3ca3e69c43d07c51",
"assets/assets/Personality%2520Development/quizzes/Stress_Management.json": "e417ac579cf9095a515bfb3b977366b4",
"assets/assets/Personality%2520Development/quizzes/Team_Building.json": "3490e9537ab0845f69d6020142af1e36",
"assets/assets/Personality%2520Development/quizzes/Time_Management.json": "3a480eea3f2f89bd39389f2dca7cfc83",
"assets/assets/Personality%2520Development/quizzes/Work_Life_Balance.json": "a5b24979522b4f3ea8fcfec686140bb8",
"assets/assets/Prompt%2520Engineering/quizzes/Advanced_Prompting_Techniques.json": "48f460a96683c064fd9f86afec658645",
"assets/assets/Prompt%2520Engineering/quizzes/Chain_of_Thought_Prompting.json": "c41196e455a97cca90023ddc30cf4fc5",
"assets/assets/Prompt%2520Engineering/quizzes/Context_and_Instructions.json": "383a394d9342fcf1b937f8809d788220",
"assets/assets/Prompt%2520Engineering/quizzes/Ethics_and_Best_Practices.json": "031fb935915725dffc2f838c871d73e5",
"assets/assets/Prompt%2520Engineering/quizzes/Few_Shot_Learning.json": "4ce307a18eb4e1319ab7220c45572569",
"assets/assets/Prompt%2520Engineering/quizzes/Fundamentals_of_Prompt_Engineering.json": "8239911c4351e8210812aad24e8a1ac3",
"assets/assets/Prompt%2520Engineering/quizzes/Output_Formatting_and_Control.json": "3516bf3db592ef79b1049e7641a737d7",
"assets/assets/Prompt%2520Engineering/quizzes/Prompt_Design_Patterns.json": "32aae4cc64205d76125cabe697db62e3",
"assets/assets/Prompt%2520Engineering/quizzes/Prompt_Testing_and_Iteration.json": "62b2f4a88d42c2a02102075dbf48fbcb",
"assets/assets/Prompt%2520Engineering/quizzes/System_and_User_Roles.json": "d6ca5bf48c32ea9f7bb87315aa34037f",
"assets/assets/Python%2520Programming/quizzes/advanced.json": "5a80cdb4940bc617ab7110be45d240e1",
"assets/assets/Python%2520Programming/quizzes/applications.json": "6fdc1331faad01ed780e0ec9f43c0643",
"assets/assets/Python%2520Programming/quizzes/control_flow.json": "193cde68b9e8fa0e91bfe5ee23b4fefc",
"assets/assets/Python%2520Programming/quizzes/data_structures.json": "92fdcd28229399efd5761bba2d422986",
"assets/assets/Python%2520Programming/quizzes/error_handling.json": "97b840bfcfa8d6c5506644e2eafeca8b",
"assets/assets/Python%2520Programming/quizzes/files.json": "5d14ca878b84bd95fbb6bce8c742407e",
"assets/assets/Python%2520Programming/quizzes/functions.json": "e1d3d5a4d43fac49e60190fc583f4169",
"assets/assets/Python%2520Programming/quizzes/intro.json": "2415873f7bcc7ff2fc3e3e33bd5b3864",
"assets/assets/Python%2520Programming/quizzes/modules.json": "b68708623218e3e607405f222a355579",
"assets/assets/Python%2520Programming/quizzes/oops.json": "938f0175fcb18e0ee270aff9cfc9e827",
"assets/assets/Software%2520Testing/quizzes/CI_CD_Integration.json": "948e6136676f1752d43f4a55db3fb595",
"assets/assets/Software%2520Testing/quizzes/Compatibility_Testing.json": "0e45e6c170dfddc17b74e8c00b35fc97",
"assets/assets/Software%2520Testing/quizzes/Defect_Management.json": "199a073d3b671011606005838c24f256",
"assets/assets/Software%2520Testing/quizzes/Functional_NonFunctional_Testing.json": "becd7e25504a0c8cce082c2d17870ff0",
"assets/assets/Software%2520Testing/quizzes/Intro_to_Testing.json": "f2ce0223d58cecb74842b6f9f8f56232",
"assets/assets/Software%2520Testing/quizzes/Performance_Testing.json": "68e9f349e0047aa89650fc0f9528db10",
"assets/assets/Software%2520Testing/quizzes/Regression_Exploratory_Testing.json": "9edca0e676a048440184a8a432a68bb4",
"assets/assets/Software%2520Testing/quizzes/Security_Usability_Testing.json": "e7b002760b2e92e86562ad8d769b3dc0",
"assets/assets/Software%2520Testing/quizzes/System_Acceptance_Testing.json": "d68673fa0444273ec8fb03aeee7f338f",
"assets/assets/Software%2520Testing/quizzes/Testing_Levels.json": "6662ee2125ad603bea99b2e004bf0539",
"assets/assets/Software%2520Testing/quizzes/Test_Automation.json": "217b7cc69d7a75cdd69f38e3428a60c6",
"assets/assets/Software%2520Testing/quizzes/Test_Data_Management.json": "26b3fb5072a750c11034232327653d74",
"assets/assets/Software%2520Testing/quizzes/Test_Design_Execution.json": "089bb4c6773900bde6f417cb602b6544",
"assets/assets/Software%2520Testing/quizzes/Test_Reporting_Analytics.json": "1fd60e45dc9580a8bb19263ac59a42f1",
"assets/assets/Software%2520Testing/quizzes/Unit_Integration_Testing.json": "73af9150a15ec48232b36c49aef3af01",
"assets/assets/student_home/qrcode.jpg": "bb15dcae08e75ee837eaa40f51112ad5",
"assets/assets/student_home/sfcmp.png": "62aa2a5c327025b8c04d34c76626f7cc",
"assets/assets/student_home/sf_home_1.png": "e8f726c374db3837ae9cfd0694c6638f",
"assets/assets/student_home/sf_home_2.png": "a13e5bae3fa2eb43a777fe9c6869c537",
"assets/assets/universities.json": "d15718fa20a6934dd22346bc7896d7dd",
"assets/assets/Web%2520Development/quizzes/css_advanced.json": "b05660a0e2d5046bb312f568895b46bb",
"assets/assets/Web%2520Development/quizzes/css_intro.json": "5c1bb742461035e360a00ace7c1354eb",
"assets/assets/Web%2520Development/quizzes/css_responsive.json": "38993007b4aa1c5cd1d571faf9c1ca2f",
"assets/assets/Web%2520Development/quizzes/html_apis.json": "67a1aa5841c5148625a0f3f50b39386a",
"assets/assets/Web%2520Development/quizzes/html_forms.json": "5bb7da1640e3b82fba94a9befeffbc5a",
"assets/assets/Web%2520Development/quizzes/html_intro.json": "0a1cd4dca0dacf6ea297a3b80c54cace",
"assets/assets/Web%2520Development/quizzes/html_media.json": "a14345eea18aed36f1044261aededcee",
"assets/assets/Web%2520Development/quizzes/js_apis.json": "b9ba733cc54b2d2977433507795e5952",
"assets/assets/Web%2520Development/quizzes/js_async.json": "d4856c1c018cb8cc27ae59f258a2abcf",
"assets/assets/Web%2520Development/quizzes/js_bom.json": "a3b97298f58711a34528dbbc109f7bb7",
"assets/assets/Web%2520Development/quizzes/js_intro.json": "b449a0ec887486e5eaf469ced00760d8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "cc3bd3be3593f74bb4855b9fe4ad9c1f",
"assets/NOTICES": "cb47c33bb2073f8c0cfb3120ea5a01cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "283f629835fb880f0b63b2d470935d4d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2f61e1189891f07a692be9efa2d2150",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "3fb2f56397c2a0fb86ea6872c6145842",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "8643c20c190144cfb0460cadbf8e0604",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f03dfe0b241854f1793d8c4e77f47f27",
"icons/Icon-192.png": "9b9147761b789428e0bc90a976b1fcb5",
"icons/Icon-512.png": "d50db7cacaba6f3fff5c9d13b283d428",
"icons/Icon-maskable-192.png": "9b9147761b789428e0bc90a976b1fcb5",
"icons/Icon-maskable-512.png": "d50db7cacaba6f3fff5c9d13b283d428",
"index.html": "79e261630a92eba85ff12c6578c319e1",
"/": "79e261630a92eba85ff12c6578c319e1",
"main.dart.js": "90e508d07a85b2aa1b32158ef9dcb4e1",
"manifest.json": "7e48f1849e1583eb1ef555a3858e8b54",
"version.json": "900445f2862463ceb58ffd4b5de97cb4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
