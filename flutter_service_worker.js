'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "accfebfbca8a127408e55a14af0bc687",
".git/config": "f8f0e3fbc936880b8e859040713bf6e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a5fcf77bbd9b94d0947ac9a60b848627",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "21a095f0101a434aad6cec59e0b811cf",
".git/logs/refs/heads/gh-pages": "f491b7363813da621057ead416f5d3d3",
".git/logs/refs/remotes/origin/gh-pages": "e57e1eb9a59347910696ddebac061c97",
".git/logs/refs/remotes/origin/main": "4e6858da75eccaf2d271ef13d11d24be",
".git/objects/01/261d870c4e59379b5cd3ef8789474ba7cce7f0": "75a0050917c5688accb5735f19fe524b",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/18/99fb66fcc2a335d7f14d41f77a5fd65ec62e34": "daa9d68bd1327b5b9a6c64435bbab021",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/be00559b06a0644d447eba329960dd393c57b3": "18c8f1543397cad701c4ffb65dbc385f",
".git/objects/1d/db0a9da8489d9fcb00f647c974c504d4638fae": "0f0d3fe87dcd05bf924e111ae293f9f7",
".git/objects/1e/5a661c47f8028c30c8fc1c28ceb932c79af338": "c3703b7a73c1691d1e81378cec1d9502",
".git/objects/23/f3ba1cd6f6833ebe8f8c46f2ef518e76751414": "ccfc1a8ebd0dba3b3fc01d8a7e6e821b",
".git/objects/27/99a2c8ebe987c523443e8c98107688bc371f8f": "e1069560a29136c6f2a2642e7d805c78",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/8809f323cdb3adb9e89136eaf87a4d873e3505": "4d600558d51ffaaf5dcabc61e94a5d4a",
".git/objects/2a/adac775746d19f97ea7819af2974b2e819e4b5": "97bceb47dfe97dd57c727e8edabecd64",
".git/objects/2b/6b6ed10e33d2687491fe1769f477dfbce1b1ba": "3bad78eb24838fe6a523adfc1132077a",
".git/objects/2d/2a44e32142bf1ea675c52ef11c6d9a82d8bb13": "43ca27e562d3796b9038775c668e4b3b",
".git/objects/34/34a6d8acad22db3871ae885f445a90b5ac7fbe": "b59149a8b9bdb3c0af1678d92d37146f",
".git/objects/3b/eb0d5f64dedec3034fb39bfd1c46ca5c622b16": "d9681f326e4efd22fd260d7f14340866",
".git/objects/3b/fc1ea918ba35be4fefc8b21b1a4028673135dd": "d71f5d64cd30cf017fc1c4e450baa0da",
".git/objects/3c/e7825a22f3b3aa13e53279d047005ec4d23380": "e635b02793774ee27888b2c33cd59e6e",
".git/objects/43/77ae8016b197e9f5634887b58590f7ddbc74bf": "2ceb457bf2ad59bab0ddd4bcc7f78239",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/1718c980e547882d7e93234dd72fa284abcf6a": "6348f6a0d6563ad0bee2227a0ac88d6f",
".git/objects/49/94f73000ca762f99304bef602a54b5c9b5b9cf": "02b8e293a142b68e28926788a3e0ab49",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/105381ca7cf153dc24dcf0a91414d4cc913f60": "ce68414585aeccc429e1bbee712808e8",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/3ae5834aa0844f07058f77994f34efc9c70ab1": "a1e5b5c6e98d983e80140fd79f510efc",
".git/objects/5b/68b1de9212d6a95e938a583037ac2b00668021": "58938f92762d27365f410ae0bb58c53e",
".git/objects/5c/446bc998cf3b0852d854a53bc5a8f3be6a9b0c": "c759023d2beb3888cb94a6f4f17171bb",
".git/objects/5e/163c9afab90a024e9b3ee0eb10decc307c531d": "410236055ad5e3840c32f28acd8c83d5",
".git/objects/63/2d03bb2bfa864717414f491e749b1bc3163468": "ab8c10144b6e1581583ec6c6ac0e571d",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/4eae633d7ad3418dfeb8818f3452bc0d5fbf67": "4972b54a3c8353f2558f53bd062fae73",
".git/objects/6a/7e1acd32621b1e2cc515bb969e6eee480d95c4": "c3a12308a06830ebf959cc5d4cdddd5a",
".git/objects/6b/02e990d5cb075464a681ec73b6ee9243851dd5": "ae5432eb83799417b20a7d13f4e1b851",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/077dfad10cfd6574d45d4ae1c5236f718c0a45": "d37bf3c06a591518ea4d1f2426bf35b6",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/9dbd603f6369ea228a64b35de8118f83f840e9": "430db4d53e47562d56dcad9cffadf96d",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7f/cb146f7a4d3eb613e23345353701d7f010b132": "1791f1835b43b32100c49d09db6dbb03",
".git/objects/82/0947e605019b717b300b3b2c2930e5dcb36144": "9172f3b77b288a663c1234786e31b234",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2075bdec0911f944e1cb0960c13265bef0d6d1": "b674554cf460a6e99698a0a27c2e91ce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/ef7a1f8c1bf9b8bfd392b0dd6f3bfd50a73af1": "c84531b659365d578147e9fae6e1af2c",
".git/objects/92/168c6c5db52c7b1dea01d92f82045e2f30c361": "3d0d8c66922dab3782f1bb1d559b1cbd",
".git/objects/94/27b5ede5f07261efd7d05299f75718b23c4e84": "8d8f52ca9aefd9a94d2822cc022b6be8",
".git/objects/96/0e311871de02f95eb589750659576660b82b05": "a8a8e730eb520bf98b69137e72d32006",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/62fe718697862b3e1f89fe3f1f0c14f6d2036f": "e6640873ec17ae18a0192a52a3bede5b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/f87007dd42be500224a4003b45aefdc6d150eb": "71ef6d01ea97e454fd09f53e579dcc77",
".git/objects/9f/c8b8889656c3fd35d4dae8ea9ba08be73e794e": "b2871075f936e9e9b8ab56d9c3dc1d2c",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/a4/5dddb621d576fca371ac318a42283eacd2d160": "d48a62d1b1f59000b3bf9173c6f28849",
".git/objects/a9/253e8d770de1f7bcca54945e638eecbb567fe3": "55dc9dbd667ee39b2a2d6bff365298ed",
".git/objects/a9/59b6d1cbde33f3fc4c60facac7aba8558ab814": "46c94f977a690e7cdd9041adea9c6518",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b4/8e58c6cd0fb70852fe0f4beea7c8a6cf0a2029": "2ced9f7c0e4d636c0e38b6feca17a217",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/f9bb2957dad6f565808b2b043a131125254a7a": "4eeebef0b322796bfbe82671580f023e",
".git/objects/c1/46fd80e2f6ae3c183e102d954690b64e00d4a1": "65225ddb69d5bd1ccba79e40affdfd7b",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/7fcf94d8ac3379396e5e83bc1be2caa0a530b1": "73d1fbd3f1b2ea094a33ebde28c724f3",
".git/objects/c8/e61cc9a91c4a8342ea1dd7e114afae7c44c147": "66d143d47b141649fbb90463e428b408",
".git/objects/c9/3bec324c4751e4b005db2f620f7d04b25fe915": "ca5abc5d9629c7d115fee987a6c4dcd3",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/ce/f367f4d908c9712250a58cfbafdd139ef9fffc": "de8fb39a178a0cb5fb53ba1b2bf1f578",
".git/objects/d1/23045af6fb253b4a0e228b83579839622fe523": "0f1bdb12d9b7516eaae622cb5a5f64ba",
".git/objects/d1/72ab0baf213c3862aeaf6c82ec5a63309ed0ab": "a45ea8e2307cd3405394cfd423e83314",
".git/objects/d3/5927f1eaca0c8e6251c43af5bc7d7f24c354d7": "f24d4871ffaff1524ffb9277722f8d4d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/671cc047957458e47d4e85f0a73653ad052525": "407e358b3a5d79dc60ffd7d20c000235",
".git/objects/d6/1858c8f57e18999f49c12f278dc90b0655219e": "d951578ab0b369315bd9c40d26ed8b2e",
".git/objects/d6/99e4806cc58e5017141c527f90d0b9bef99a49": "53700bd16a7b7f8209091c1c5ea61e9f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e4/a44d5667974161f1a6b56d11fb2a426044c1de": "9ec3a213f7af51b7a658ea42d4ffb95a",
".git/objects/e5/bd131d82097d3447d18f226642259ef1a41b2f": "6a8b54d906022a324c679f3181665191",
".git/objects/e6/67490b5e3c4bfe6b4c585516eb43d259c98f2a": "f16dcb7c9ec90f3eb9f3f941e1cfe86e",
".git/objects/e8/7e8a608a5e531efadd5ceeedf8ccddbab2b517": "b0b42a1b2581d0a294bd1d4e5745524b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/3753cc0ca2a6c0529dffc9db2ef84d6b9f6ac0": "99e318801cccb1a1258a1cdfcc0b1315",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/c963ca37054bd8da5b7bf6f3d99eea95424876": "089349b96998708c52635494c02edb9a",
".git/objects/fb/87b0907dc3f99e773d0766f597dea9dcc757eb": "a606b33ca98ff6fe3b009493992e62d1",
".git/objects/fd/eac53e8e047ea3b763f3f90551a052df44b7ae": "090ae64d796253ce90f86ca3951a0a8d",
".git/refs/heads/gh-pages": "a15292c2a24e32edfcea3c729207d20f",
".git/refs/remotes/origin/gh-pages": "a15292c2a24e32edfcea3c729207d20f",
".git/refs/remotes/origin/main": "a15292c2a24e32edfcea3c729207d20f",
"assets/AssetManifest.bin": "76c7665d55b7c6e5c7367472520fdf37",
"assets/AssetManifest.bin.json": "6b5080916694a6bbd0184e212731b470",
"assets/AssetManifest.json": "8f308c8bf5bfe4ad72b7212dc3a99d9b",
"assets/assets/ankitp.png": "33bedc0d9c017ddb56e350739b3f6304",
"assets/assets/background.mp4": "eb6e5b41b38f28ce2d82aa15db7bf25a",
"assets/assets/github-logo.png": "b6ec19ceacb23390aa66d2f101d0ddf6",
"assets/assets/gmail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/icons/androidstudio.png": "9dd721ab1d133e792eb65f42a5602a87",
"assets/assets/icons/api.png": "10edcdbe36db58628787857699cfbc61",
"assets/assets/icons/dart.png": "de0e1d06fc24e1106f7c97f561575244",
"assets/assets/icons/figma.png": "497f287338586c39043b6a206cf24338",
"assets/assets/icons/firebase.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/assets/icons/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/icons/getx.png": "1f5dcc8c4d2bd43e29295cd6ebe672a1",
"assets/assets/icons/github.png": "b6ec19ceacb23390aa66d2f101d0ddf6",
"assets/assets/icons/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/icons/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/icons/javascript.png": "d9de75e5bf3a7b0ef2a48321acc06e88",
"assets/assets/icons/kotlin.png": "a7388fc60a26cfbeda5adf05dd318cc2",
"assets/assets/icons/mysql.png": "4c6ce57441b1180c1b25aa0112cd5d3c",
"assets/assets/icons/postman.png": "76b2d960267cefa25f7179878004492c",
"assets/assets/icons/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/icons/sqlite.png": "60f2276ea5e094692282958743af690c",
"assets/assets/icons/twitter.png": "842e90afde04dcf50b7198467675dfae",
"assets/assets/icons/vscode.png": "19b9fa2ac6986213c629a3daf4054c66",
"assets/assets/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/logo.png": "f204daeec54f33837dbd0452309d3bfd",
"assets/assets/projects/dynamic_nav_bar.png": "f9b6106c06b30b96a22f6278e5c9007b",
"assets/assets/projects/edutrack.png": "fda1fecac5b1cafd68aa25f1f1811e1f",
"assets/assets/projects/letsmeet.png": "6dacdd41e71d075c3b55acf4113a245e",
"assets/assets/projects/service_provider.png": "6c49d978616374557faa36fe096ed962",
"assets/assets/projects/talentia.png": "edfdd4814b47bd56a5ca4bdd114a74fe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f3f9e2ed3b756a3533f43a2500f775f4",
"assets/NOTICES": "3db5fb7d4bc3a734ee0dcec721f26a3e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "042694fabed51b1cb5ea9336ac962099",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f4a8cc276e7d49f753b35e91b184539",
"/": "1f4a8cc276e7d49f753b35e91b184539",
"main.dart.js": "169b7f8e93f03a02e13deafd9ac200be",
"manifest.json": "f73c77f3bbb95600ac8b042bcc4d19d5",
"version.json": "853cd13cd18008f5ec2cdba4889baabe"};
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
