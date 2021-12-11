import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          _id: "61b1d9266e8446d03a2df54c",
          company: "EXOBLUE",
          tags: "jordan",
          color: "#344CB7",
          image:
            "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
          imgText: "Lorem",
          slider: [
            {
              _id: "61b2063629949e4363853a22",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "CENTREXIN",
              description:
                "Ad consequat eu exercitation dolor nostrud nostrud anim amet ex proident duis amet sit eu. Qui velit sunt id incididunt sunt. Voluptate aliquip veniam culpa ex aliquip irure ipsum nostrud anim reprehenderit non. Ex elit reprehenderit dolore voluptate fugiat labore ipsum consequat eu proident. Consequat duis aliquip dolor dolore. Lorem deserunt nulla dolore sit sint deserunt laboris.\r\n",
              tags: "vapormax",
              color: "#344CB7",
              price: 147.16,
              amount: 1687,
              size: "420x297mm",
              count: 1129,
            },
            {
              _id: "61b206365861aa495b3ca71f",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "ULTRIMAX",
              description:
                "Incididunt nulla velit officia deserunt commodo culpa est esse. Duis nulla sit enim eiusmod. Et id qui occaecat non eu aliquip occaecat laboris nulla occaecat in. Ullamco in esse do amet cupidatat laboris eiusmod proident consectetur id. Elit irure laborum enim ipsum ad ipsum est. Cupidatat proident adipisicing reprehenderit id consectetur duis eu amet sint elit amet occaecat amet.\r\n",
              tags: "vapormax",
              color: "#FF00E4",
              price: 129.97,
              amount: 2546,
              size: "420x297mm",
              count: 1337,
            },
            {
              _id: "61b2063636b6a368b3360c55",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "FUTURITY",
              description:
                "Dolor ad consequat elit culpa non sunt elit tempor est fugiat. Occaecat qui nostrud velit adipisicing occaecat sint consequat qui exercitation irure amet nostrud magna. Cupidatat elit occaecat ipsum exercitation mollit quis sit Lorem sint velit cupidatat consequat adipisicing enim. Quis deserunt velit quis enim reprehenderit laboris proident duis non culpa pariatur. Fugiat quis magna consequat labore aliqua ea laborum laboris non id fugiat reprehenderit. Minim incididunt tempor eu magna nisi culpa est.\r\n",
              tags: "vapormax",
              color: "#62A8AC",
              price: 110.39,
              amount: 2924,
              size: "420x297mm",
              count: 1187,
            },
            {
              _id: "61b2063689061e939f61f90a",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "ONTAGENE",
              description:
                "Est incididunt deserunt occaecat cupidatat fugiat qui incididunt fugiat. Velit Lorem ut pariatur est ea esse. Ullamco esse elit consectetur ad velit labore sint fugiat aliquip. Aute non sint nisi laboris officia occaecat nisi. Minim incididunt commodo dolore esse laboris magna proident mollit ex do nostrud excepteur irure velit. Fugiat eiusmod laborum aliquip eiusmod ad reprehenderit non elit anim amet labore nostrud sint.\r\n",
              tags: "vapormax",
              color: "#62A8AC",
              price: 196.7,
              amount: 2481,
              size: "420x297mm",
              count: 1093,
            },
            {
              _id: "61b20636209255a39c2f7623",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "DIGIGEN",
              description:
                "Commodo cupidatat ad culpa exercitation tempor. Culpa eiusmod nisi laborum minim dolor. In voluptate adipisicing veniam occaecat aliqua excepteur incididunt Lorem ea. Elit aute non sit in nulla tempor Lorem culpa ad. Velit incididunt incididunt magna veniam do adipisicing dolore commodo deserunt sint. Et tempor dolore officia sint.\r\n",
              tags: "vapormax",
              color: "#344CB7",
              price: 205.22,
              amount: 2371,
              size: "420x297mm",
              count: 2202,
            },
          ],
        },
        {
          _id: "61b1d926c7c1018c3055b536",
          company: "MACRONAUT",
          tags: "jordan",
          color: "#62A8AC",
          image:
            "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
          imgText: "Lorem",
          slider: [
            {
              _id: "61b36a97c6493eb4b2d3dd13",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "EQUICOM",
              description:
                "Est aliquip sint minim id quis nostrud culpa consequat id nisi. Lorem excepteur id fugiat pariatur mollit id enim cupidatat do et. Elit nulla commodo nostrud sint aliquip velit. Aliqua consectetur id anim culpa duis minim pariatur cillum cillum excepteur culpa est nulla voluptate. Magna enim esse velit nostrud aute dolor ex nulla. Quis nulla occaecat dolore excepteur nostrud sunt ea exercitation duis amet. Laboris commodo tempor non consequat do incididunt aliqua sunt ipsum non ea non.\r\n",
              tags: "vapormax",
              color: "#FF00E4",
              price: 178.99,
              amount: 1349,
              size: "420x297mm",
              count: 2809,
            },
            {
              _id: "61b36a972c327f53f0401fd8",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "KNOWLYSIS",
              description:
                "Minim labore commodo duis eiusmod do Lorem. Proident adipisicing aliquip id nulla consequat fugiat irure est non minim ex id sunt. Deserunt qui ex ipsum aliqua quis quis aliquip reprehenderit nostrud. Lorem amet sit id exercitation deserunt mollit dolor ea laborum est ex commodo ut irure.\r\n",
              tags: "vapormax",
              color: "#344CB7",
              price: 147.94,
              amount: 2722,
              size: "420x297mm",
              count: 1412,
            },
            {
              _id: "61b36a9798ba76983829bd2c",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "HALAP",
              description:
                "Irure in sint sit consequat minim occaecat. Cillum id voluptate qui Lorem sint cupidatat non quis pariatur exercitation in cupidatat. Adipisicing consectetur irure adipisicing ea. Id quis consequat occaecat ipsum pariatur ut. Magna occaecat deserunt et pariatur non elit pariatur exercitation ullamco.\r\n",
              tags: "vapormax",
              color: "#344CB7",
              price: 244.12,
              amount: 1213,
              size: "420x297mm",
              count: 1292,
            },
            {
              _id: "61b36a97d4d68523d4adda25",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "CONFERIA",
              description:
                "Cupidatat aliqua aliqua enim in cillum adipisicing. Non veniam non officia nostrud excepteur amet labore aliquip. Qui non pariatur elit officia. Aliqua officia magna aliquip labore culpa qui mollit minim est.\r\n",
              tags: "vapormax",
              color: "#62A8AC",
              price: 144.68,
              amount: 2560,
              size: "420x297mm",
              count: 1067,
            },
            {
              _id: "61b36a97309b53589f4f25ba",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "ZILENCIO",
              description:
                "Sit magna adipisicing enim dolore officia. Elit et eiusmod elit magna et occaecat ipsum do. Dolore dolor proident culpa tempor in irure ut sunt. In quis amet commodo ex laboris dolor ea laboris velit.\r\n",
              tags: "vapormax",
              color: "#344CB7",
              price: 227.33,
              amount: 1608,
              size: "420x297mm",
              count: 2587,
            },
            {
              _id: "61b36a97c811d65688a0b5d1",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "ZILLACTIC",
              description:
                "Cillum dolor ad eu velit do in id ad. Aute incididunt sit nostrud nulla officia tempor qui enim elit aliquip. Adipisicing sit ad adipisicing magna mollit tempor ipsum exercitation laborum sunt.\r\n",
              tags: "vapormax",
              color: "#344CB7",
              price: 233.16,
              amount: 2956,
              size: "420x297mm",
              count: 1194,
            },
          ],
        },
        {
          _id: "61b1d9260d3f996109eb654a",
          company: "MANTRIX",
          tags: "jordan",
          color: "#344CB7",
          image:
            "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
          imgText: "Lorem",
          slider: [
            {
              _id: "61b36a9fd94247fee9b49888",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "OULU",
              description:
                "Sunt cupidatat ad occaecat pariatur laborum elit sunt sint id ad. Sunt aliqua quis ex velit commodo Lorem consequat culpa exercitation quis consectetur. Elit exercitation occaecat excepteur voluptate cupidatat commodo reprehenderit occaecat fugiat fugiat veniam quis cillum enim. Laboris duis dolore fugiat excepteur culpa officia. Enim consectetur magna deserunt aliqua sit tempor culpa sint adipisicing mollit Lorem. Dolore ea do ullamco excepteur consectetur qui in eiusmod exercitation eiusmod qui nostrud sit sunt. Veniam voluptate dolore nulla occaecat ad labore in nulla exercitation ea et ex eu elit.\r\n",
              tags: "vapormax",
              color: "#FF00E4",
              price: 157.79,
              amount: 1339,
              size: "420x297mm",
              count: 1256,
            },
            {
              _id: "61b36a9f42672139e248c943",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "ANIVET",
              description:
                "Occaecat dolore consectetur anim nostrud cillum aliqua amet eu. Qui do eiusmod culpa cupidatat enim. Voluptate occaecat ullamco culpa tempor amet laboris ullamco. Enim aliquip id incididunt nulla eu. Ullamco laborum duis culpa ullamco adipisicing dolore cillum amet ullamco. Qui sit laborum nostrud ea nisi.\r\n",
              tags: "vapormax",
              color: "#344CB7",
              price: 237.1,
              amount: 2136,
              size: "420x297mm",
              count: 2265,
            },
            {
              _id: "61b36a9f7e8b8cbea1d82d3e",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "QUONATA",
              description:
                "Labore consectetur est cillum ea cupidatat pariatur incididunt tempor ipsum in cillum dolor voluptate ipsum. Ipsum nisi cillum dolor amet dolore quis occaecat aliquip qui voluptate amet id officia nulla. Do Lorem amet irure dolore Lorem quis. Velit minim deserunt mollit occaecat magna nisi duis cupidatat anim sint dolore eiusmod ad nostrud.\r\n",
              tags: "vapormax",
              color: "#FF00E4",
              price: 191.71,
              amount: 1021,
              size: "420x297mm",
              count: 2098,
            },
            {
              _id: "61b36a9f8a3f9b41e6d390f2",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "BUGSALL",
              description:
                "Lorem aute occaecat consectetur qui veniam velit duis. Laborum sint pariatur cillum ad dolor ad esse. Reprehenderit fugiat consectetur mollit dolor reprehenderit reprehenderit voluptate excepteur esse. Ad Lorem et reprehenderit minim excepteur labore consectetur eiusmod. Aliquip ad velit quis enim cillum dolor fugiat. Consequat et commodo Lorem sit aliqua sit.\r\n",
              tags: "vapormax",
              color: "#344CB7",
              price: 132.94,
              amount: 2317,
              size: "420x297mm",
              count: 2335,
            },
            {
              _id: "61b36a9f152fb9cda3d904a3",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "DIGIFAD",
              description:
                "Cillum consequat ad cupidatat sit non ut do ex. Dolore commodo laboris laboris reprehenderit consectetur cupidatat nulla anim anim. Ullamco laboris id aliqua pariatur consectetur duis irure est occaecat. Aliqua aliquip ipsum Lorem occaecat Lorem duis irure. Ea in sit aute laboris proident ad. Irure consequat anim irure labore ipsum ex.\r\n",
              tags: "vapormax",
              color: "#62A8AC",
              price: 127.35,
              amount: 2290,
              size: "420x297mm",
              count: 1881,
            },
            {
              _id: "61b36a9f8a85f0b920916caf",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "SECURIA",
              description:
                "Pariatur cillum do ipsum ea. Culpa sint do duis culpa consectetur consectetur. Mollit magna enim excepteur enim dolore do. Eiusmod dolor exercitation dolore nulla non veniam nisi. Voluptate officia amet ut non fugiat. Enim consequat qui magna do.\r\n",
              tags: "vapormax",
              color: "#FF00E4",
              price: 258.48,
              amount: 2290,
              size: "420x297mm",
              count: 1750,
            },
            {
              _id: "61b36a9f04e625794d557f23",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "ENQUILITY",
              description:
                "Irure excepteur nulla nisi deserunt ex laboris deserunt nulla eiusmod tempor tempor deserunt. Officia duis et voluptate sunt excepteur. Deserunt tempor ea est aliqua labore. Lorem adipisicing consequat incididunt fugiat ullamco dolore consequat quis. Nulla irure proident ea tempor officia.\r\n",
              tags: "vapormax",
              color: "#FF00E4",
              price: 144.34,
              amount: 2681,
              size: "420x297mm",
              count: 1739,
            },
          ],
        },
        {
          _id: "61b1d92663fe5bd6dac24d19",
          company: "MEGALL",
          tags: "vapormax",
          color: "#FF00E4",
          image:
            "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
          imgText: "Lorem",
          slider: [
            {
              _id: "61b36aa8023e5c49426e8138",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "HONOTRON",
              description:
                "Occaecat nulla dolor tempor Lorem dolor dolore id dolor labore sint mollit esse incididunt esse. Nostrud duis et Lorem nisi. Dolore consectetur cillum labore ea magna qui nostrud aliqua exercitation laborum consequat fugiat incididunt laboris. Commodo mollit enim nulla tempor veniam est. Sint labore aute incididunt minim consectetur ex. Anim nostrud excepteur ex sunt eiusmod duis proident eiusmod ad laborum laborum sit est. Elit dolor duis consectetur dolor ex deserunt.\r\n",
              tags: "vapormax",
              color: "#FF00E4",
              price: 246.9,
              amount: 1531,
              size: "420x297mm",
              count: 2622,
            },
            {
              _id: "61b36aa8ab16573dd4f2d691",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "WRAPTURE",
              description:
                "Incididunt duis aute adipisicing dolore do nostrud mollit aute. Incididunt occaecat elit elit anim nostrud qui occaecat sit consequat velit. Ea sit proident esse ex laborum aliquip culpa ex aliquip pariatur Lorem.\r\n",
              tags: "vapormax",
              color: "#344CB7",
              price: 169.91,
              amount: 1476,
              size: "420x297mm",
              count: 2450,
            },
            {
              _id: "61b36aa85dbdb63b8a2bb20c",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "ICOLOGY",
              description:
                "Aute nisi dolor proident nostrud dolore est ea ut ea amet ea consequat. Occaecat veniam velit anim commodo nostrud magna velit ullamco adipisicing eu. Consectetur exercitation nulla sint ea culpa nisi excepteur est tempor et aliquip minim voluptate. Qui aute duis ea ad velit labore duis sint incididunt sit esse mollit. Deserunt veniam amet amet exercitation laboris elit culpa occaecat.\r\n",
              tags: "vapormax",
              color: "#FF00E4",
              price: 134.63,
              amount: 2163,
              size: "420x297mm",
              count: 2213,
            },
            {
              _id: "61b36aa832a53adce41d0903",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "CALLFLEX",
              description:
                "Nisi dolore ut fugiat aute ipsum exercitation voluptate ut id. Officia quis laboris tempor irure ad proident enim. Tempor aute minim officia adipisicing ad Lorem magna sunt velit irure nulla amet irure.\r\n",
              tags: "vapormax",
              color: "#FF00E4",
              price: 117.27,
              amount: 1002,
              size: "420x297mm",
              count: 1585,
            },
            {
              _id: "61b36aa80fa14a211deff48e",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "KNEEDLES",
              description:
                "Excepteur labore deserunt do aliqua duis magna officia veniam nisi in tempor sunt aliqua et. Adipisicing do in sit aliqua dolore eu est do aliquip sit non. Laborum mollit elit commodo sint irure non nulla aliquip nulla mollit nostrud labore tempor do. Ea labore eu ut in irure mollit reprehenderit excepteur. Ut minim nisi voluptate laborum ad irure non et aute eu deserunt eu enim irure. Voluptate culpa labore cupidatat aute irure veniam. Est nostrud sint tempor qui duis minim exercitation.\r\n",
              tags: "vapormax",
              color: "#62A8AC",
              price: 230.48,
              amount: 2642,
              size: "420x297mm",
              count: 2983,
            },
            {
              _id: "61b36aa899fbf13485788b74",
              image:
                "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
              name: "OCTOCORE",
              description:
                "Qui id tempor ex enim exercitation aliqua anim voluptate mollit veniam. Ut in velit aliquip irure laboris incididunt duis elit ad esse exercitation proident voluptate. Dolore labore deserunt duis duis anim nulla.\r\n",
              tags: "vapormax",
              color: "#FF00E4",
              price: 283.52,
              amount: 1889,
              size: "420x297mm",
              count: 2714,
            },
          ],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
