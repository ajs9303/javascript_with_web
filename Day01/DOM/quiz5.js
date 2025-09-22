const data = [
  {
    color: "#b7d039",
    avatar: "https://robohash.org/veritatisautemquia.png?size=50x50&set=set1",
    name: "Brenna Wong",
    university: "Kingston University",
    sentences: "Nulla justo.",
    email: "bwong0@taobao.com",
  },
  {
    color: "#bd3ba3",
    avatar: "https://robohash.org/errorestnihil.png?size=50x50&set=set1",
    name: "Jorrie Kirtland",
    university: "University of Mysore",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "jkirtland1@pinterest.com",
  },
  {
    color: "#fe5c4d",
    avatar: "https://robohash.org/nobisquamaut.png?size=50x50&set=set1",
    name: "Shep Pally",
    university: "Ningxia Medical College",
    sentences: "Curabitur in libero ut massa volutpat convallis.",
    email: "spally2@dropbox.com",
  },
  {
    color: "#334b2a",
    avatar: "https://robohash.org/quiamaioressit.png?size=50x50&set=set1",
    name: "Olly Denne",
    university: "Institute of Teachers Education, Malay Language",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "odenne3@army.mil",
  },
  {
    color: "#01603a",
    avatar: "https://robohash.org/quinesciuntullam.png?size=50x50&set=set1",
    name: "Otis Carlisso",
    university: "American InterContinental University - Ft. Lauderdale",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "ocarlisso4@qq.com",
  },
  {
    color: "#89fd6e",
    avatar:
      "https://robohash.org/minimaperspiciatistempore.png?size=50x50&set=set1",
    name: "Robenia Bertomeu",
    university: "The College of St. Scholastica",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "rbertomeu5@bravesites.com",
  },
  {
    color: "#113064",
    avatar:
      "https://robohash.org/voluptatealiquidtempore.png?size=50x50&set=set1",
    name: "Ame Reast",
    university: "Webb Institute",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "areast6@epa.gov",
  },
  {
    color: "#766f8d",
    avatar: "https://robohash.org/ineaut.png?size=50x50&set=set1",
    name: "Nikolas Depper",
    university: "Forest Institute of Professional Psychology",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "ndepper7@cnbc.com",
  },
  {
    color: "#3f89af",
    avatar: "https://robohash.org/afugaquia.png?size=50x50&set=set1",
    name: "Lark Mathes",
    university: "Teikyo University of Science and Technology",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "lmathes8@economist.com",
  },
  {
    color: "#cf7fb9",
    avatar: "https://robohash.org/nihilfugaipsam.png?size=50x50&set=set1",
    name: "Jethro Lemmens",
    university: "University of Sargodha",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "jlemmens9@ucoz.ru",
  },
  {
    color: "#af6dca",
    avatar: "https://robohash.org/suscipitvitaeab.png?size=50x50&set=set1",
    name: "Freddy Guare",
    university: "The Art Institutes International Portland",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "fguarea@skype.com",
  },
  {
    color: "#cc57ac",
    avatar: "https://robohash.org/voluptatesutsit.png?size=50x50&set=set1",
    name: "Lezlie Dunlop",
    university: "St. Petersburg State University of Aerospace Instrumentation",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "ldunlopb@hc360.com",
  },
  {
    color: "#1856af",
    avatar:
      "https://robohash.org/accusantiumeadoloribus.png?size=50x50&set=set1",
    name: "Wood Brenstuhl",
    university: "Niigata University of International and Information Studies",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "wbrenstuhlc@arizona.edu",
  },
  {
    color: "#bc1c72",
    avatar: "https://robohash.org/fugitdoloremcommodi.png?size=50x50&set=set1",
    name: "Bertina Farryann",
    university: "Santa Clara University",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "bfarryannd@merriam-webster.com",
  },
  {
    color: "#fc65cd",
    avatar:
      "https://robohash.org/eumoccaecaticonsectetur.png?size=50x50&set=set1",
    name: "Maure Batsford",
    university: "Sabzevar Teacher Training University",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "mbatsforde@narod.ru",
  },
  {
    color: "#e8ab6d",
    avatar: "https://robohash.org/delenitirerumearum.png?size=50x50&set=set1",
    name: "Julie Hugett",
    university: "University of Food Technology",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "jhugettf@wired.com",
  },
  {
    color: "#588899",
    avatar: "https://robohash.org/omnisillovelit.png?size=50x50&set=set1",
    name: "Michele Rentz",
    university: "American International College",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "mrentzg@quantcast.com",
  },
  {
    color: "#993e62",
    avatar: "https://robohash.org/quoidaut.png?size=50x50&set=set1",
    name: "Babette Idwal Evans",
    university: "Institute of Teachers Education, Tun Hussein Onn",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "bidwalh@mayoclinic.com",
  },
  {
    color: "#d83f82",
    avatar: "https://robohash.org/molestiaesuntet.png?size=50x50&set=set1",
    name: "Van Strettle",
    university: "Western University",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "vstrettlei@nba.com",
  },
  {
    color: "#0af487",
    avatar: "https://robohash.org/eumautadipisci.png?size=50x50&set=set1",
    name: "Mitchell Grenkov",
    university: "Stamford International University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "mgrenkovj@hao123.com",
  },
  {
    color: "#2a197a",
    avatar: "https://robohash.org/atqueearumomnis.png?size=50x50&set=set1",
    name: "Gardener Willis",
    university: "Escuela Politécnica Nacional",
    sentences: "Nunc purus.",
    email: "gwillisk@yahoo.co.jp",
  },
  {
    color: "#fce48c",
    avatar: "https://robohash.org/velitsuntdolorem.png?size=50x50&set=set1",
    name: "Hadlee Tearney",
    university: "Arak University of Technology",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "htearneyl@apple.com",
  },
  {
    color: "#be2cc5",
    avatar: "https://robohash.org/velitdelectusea.png?size=50x50&set=set1",
    name: "Felix Dominik",
    university: "St. Thomas Aquinas College",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "fdominikm@disqus.com",
  },
  {
    color: "#e86e73",
    avatar: "https://robohash.org/namomnisesse.png?size=50x50&set=set1",
    name: "Lovell Toolin",
    university: "Jordan University of Science and Technology",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    email: "ltoolinn@virginia.edu",
  },
  {
    color: "#02f6b0",
    avatar: "https://robohash.org/ullametodit.png?size=50x50&set=set1",
    name: "Estrellita Honywill",
    university:
      "Fachhochschule Heilbronn, Hochschule für Technik und Wirtschaft",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "ehonywillo@example.com",
  },
  {
    color: "#8d7986",
    avatar:
      "https://robohash.org/exaccusantiumvoluptatibus.png?size=50x50&set=set1",
    name: "Derk Ballsdon",
    university: "Universidad Capitain General Gerardo Barrios",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "dballsdonp@devhub.com",
  },
  {
    color: "#0c238f",
    avatar: "https://robohash.org/sedesseculpa.png?size=50x50&set=set1",
    name: "Bobby Charrington",
    university: "Palmer College of Chiropractic West",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "bcharringtonq@mapquest.com",
  },
  {
    color: "#f0536e",
    avatar: "https://robohash.org/corporismaximeaut.png?size=50x50&set=set1",
    name: "Dorian Lowson",
    university: "Mongolian State University of Agriculture",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "dlowsonr@webs.com",
  },
  {
    color: "#585c76",
    avatar: "https://robohash.org/aperiamomnisvoluptas.png?size=50x50&set=set1",
    name: "Jarid Schulke",
    university: "Bilkent University",
    sentences: "Nam tristique tortor eu pede.",
    email: "jschulkes@cnbc.com",
  },
  {
    color: "#548d62",
    avatar: "https://robohash.org/debitiscupiditateat.png?size=50x50&set=set1",
    name: "Vinnie Voice",
    university: "Mississippi University for Women",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "vvoicet@illinois.edu",
  },
  {
    color: "#816993",
    avatar:
      "https://robohash.org/occaecativoluptatibusest.png?size=50x50&set=set1",
    name: "Eden Travis",
    university: "Sri Lanka Institute of Advanced Technical Education",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "etravisu@loc.gov",
  },
  {
    color: "#511de9",
    avatar:
      "https://robohash.org/commodimaioresvoluptatem.png?size=50x50&set=set1",
    name: "Essa Jannaway",
    university: "Silesian Academy of Medicine in Katowice",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "ejannawayv@guardian.co.uk",
  },
  {
    color: "#ef8871",
    avatar: "https://robohash.org/eaestsint.png?size=50x50&set=set1",
    name: "Rodie Lunn",
    university: "Aichi University of Education",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    email: "rlunnw@flickr.com",
  },
  {
    color: "#d506d5",
    avatar: "https://robohash.org/eosestincidunt.png?size=50x50&set=set1",
    name: "Tanney Blore",
    university: "Universidad del Istmo",
    sentences: "Nulla justo.",
    email: "tblorex@phpbb.com",
  },
  {
    color: "#a3e7a5",
    avatar: "https://robohash.org/rationeconsecteturat.png?size=50x50&set=set1",
    name: "Brandy Beetham",
    university: "Universitas Paramadina Mulya",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "bbeethamy@jimdo.com",
  },
  {
    color: "#23f1f4",
    avatar: "https://robohash.org/magniliberonon.png?size=50x50&set=set1",
    name: "Dre Colborn",
    university: "4th Military Medical University",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "dcolbornz@cam.ac.uk",
  },
  {
    color: "#0eb8ec",
    avatar: "https://robohash.org/sitquoaccusantium.png?size=50x50&set=set1",
    name: "Oralee Milan",
    university: "Saba University",
    sentences: "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "omilan10@ustream.tv",
  },
  {
    color: "#46c826",
    avatar: "https://robohash.org/voluptatumnobisdolor.png?size=50x50&set=set1",
    name: "Rayna Wherrit",
    university: "Yorker International University",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "rwherrit11@blogtalkradio.com",
  },
  {
    color: "#8967a4",
    avatar:
      "https://robohash.org/modiimpeditvoluptatibus.png?size=50x50&set=set1",
    name: "Pet Caps",
    university: 'Universidad Argentina "John F. Kennedy"',
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "pcaps12@bravesites.com",
  },
  {
    color: "#2380f1",
    avatar:
      "https://robohash.org/consecteturnihilmolestias.png?size=50x50&set=set1",
    name: "Chevy Mithan",
    university: "Moscow State University of Railway Transport",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "cmithan13@msn.com",
  },
  {
    color: "#e7d698",
    avatar: "https://robohash.org/etetquo.png?size=50x50&set=set1",
    name: "Herschel Abella",
    university: "Université Moulay Ismail Meknès",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "habella14@who.int",
  },
  {
    color: "#d11e10",
    avatar: "https://robohash.org/mollitianatuset.png?size=50x50&set=set1",
    name: "Lilly Dibbs",
    university: "Universidade Tecnica de Lisboa",
    sentences: "Nunc purus. Phasellus in felis.",
    email: "ldibbs15@imageshack.us",
  },
  {
    color: "#2eddf8",
    avatar: "https://robohash.org/harumquisquamducimus.png?size=50x50&set=set1",
    name: "Ebeneser Willoughley",
    university: "Indian Agricultural Research Institute",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "ewilloughley16@dot.gov",
  },
  {
    color: "#e05ac7",
    avatar:
      "https://robohash.org/quiaconsequatursoluta.png?size=50x50&set=set1",
    name: "Bertrando Hitcham",
    university: "Novosibirsk State Agricultural University",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "bhitcham17@exblog.jp",
  },
  {
    color: "#6e7c02",
    avatar: "https://robohash.org/exautvelit.png?size=50x50&set=set1",
    name: "Tonnie Pughe",
    university: "European Carolus Magnus University",
    sentences: "Morbi porttitor lorem id ligula.",
    email: "tpughe18@purevolume.com",
  },
  {
    color: "#0d0265",
    avatar:
      "https://robohash.org/rationeitaqueexcepturi.png?size=50x50&set=set1",
    name: "Ladonna Draysey",
    university: "Federal College Of Education (Technical), Akoka",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "ldraysey19@bbb.org",
  },
  {
    color: "#6248d6",
    avatar: "https://robohash.org/veniamomniscum.png?size=50x50&set=set1",
    name: "Goldie Applewhite",
    university: "Miami University of Ohio - Hamilton",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "gapplewhite1a@discovery.com",
  },
  {
    color: "#385489",
    avatar: "https://robohash.org/adearumsint.png?size=50x50&set=set1",
    name: "Gladi Beecraft",
    university: "Kalinga University",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "gbeecraft1b@163.com",
  },
  {
    color: "#7402f6",
    avatar:
      "https://robohash.org/asperioresquidemtempore.png?size=50x50&set=set1",
    name: "Sophronia Immins",
    university: "Instituto Politécnico do Cávado e do Ave",
    sentences: "Suspendisse accumsan tortor quis turpis.",
    email: "simmins1c@dmoz.org",
  },
  {
    color: "#1e20f9",
    avatar: "https://robohash.org/ametsapienteut.png?size=50x50&set=set1",
    name: "Margeaux Cawcutt",
    university: "St. Petersburg State Chemical Pharmaceutical Academy",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "mcawcutt1d@oracle.com",
  },
  {
    color: "#61a9df",
    avatar: "https://robohash.org/iureoptionihil.png?size=50x50&set=set1",
    name: "Norry Stockbridge",
    university: "Pontificia Universidad Católica del Perú",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "nstockbridge1e@bbb.org",
  },
  {
    color: "#367398",
    avatar: "https://robohash.org/nesciuntullamet.png?size=50x50&set=set1",
    name: "Ian Gippes",
    university: "University of Macerata",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "igippes1f@ftc.gov",
  },
  {
    color: "#4e81bd",
    avatar: "https://robohash.org/aliquidutsimilique.png?size=50x50&set=set1",
    name: "Thaine Fonzone",
    university: "British Royal University",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "tfonzone1g@java.com",
  },
  {
    color: "#82656d",
    avatar: "https://robohash.org/sintnisiet.png?size=50x50&set=set1",
    name: "Vaughan Shiliton",
    university: "Colorado State University-Pueblo",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "vshiliton1h@twitter.com",
  },
  {
    color: "#a93a87",
    avatar: "https://robohash.org/ametnequeid.png?size=50x50&set=set1",
    name: "Carey Doud",
    university: "Indiana University (System)",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "cdoud1i@plala.or.jp",
  },
  {
    color: "#0b6fdc",
    avatar:
      "https://robohash.org/consequunturveroquisquam.png?size=50x50&set=set1",
    name: "Glory Morten",
    university: "Near East University",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "gmorten1j@cargocollective.com",
  },
  {
    color: "#8ddf39",
    avatar: "https://robohash.org/illonihilratione.png?size=50x50&set=set1",
    name: "Gennifer Dalman",
    university: "Universitas 17 Agustus 1945 Semarang",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "gdalman1k@noaa.gov",
  },
  {
    color: "#34d3bd",
    avatar: "https://robohash.org/eaqueundesaepe.png?size=50x50&set=set1",
    name: "Dorry Graeser",
    university: "University of Amsterdam",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "dgraeser1l@drupal.org",
  },
  {
    color: "#9cebda",
    avatar: "https://robohash.org/quibusdamquonesciunt.png?size=50x50&set=set1",
    name: "Nataline Halse",
    university: "North Maharashtra University",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "nhalse1m@edublogs.org",
  },
  {
    color: "#026099",
    avatar: "https://robohash.org/autemquibusdamamet.png?size=50x50&set=set1",
    name: "Pia Caldwell",
    university: "Andong National University",
    sentences: "Sed vel enim sit amet nunc viverra dapibus.",
    email: "pcaldwell1n@ibm.com",
  },
  {
    color: "#86fbf5",
    avatar: "https://robohash.org/ullammolestiaeporro.png?size=50x50&set=set1",
    name: "Bel Coard",
    university: "Shahrood University of Medical Sciences",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "bcoard1o@bbb.org",
  },
  {
    color: "#5848a7",
    avatar: "https://robohash.org/animiutducimus.png?size=50x50&set=set1",
    name: "Andrus Hudspith",
    university: "University of Perugia",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "ahudspith1p@hhs.gov",
  },
  {
    color: "#8bd4ed",
    avatar: "https://robohash.org/eosautemitaque.png?size=50x50&set=set1",
    name: "Ezekiel Hukins",
    university: "Purdue University North Central",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "ehukins1q@guardian.co.uk",
  },
  {
    color: "#c7c345",
    avatar: "https://robohash.org/explicaboetquia.png?size=50x50&set=set1",
    name: "Mirabelle O'Hickey",
    university: "Stetson University",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "mohickey1r@hud.gov",
  },
  {
    color: "#0c04ab",
    avatar:
      "https://robohash.org/eosaccusantiumperspiciatis.png?size=50x50&set=set1",
    name: "Melina Vatcher",
    university: "Paul University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "mvatcher1s@pcworld.com",
  },
  {
    color: "#c07dee",
    avatar: "https://robohash.org/solutaquibusdama.png?size=50x50&set=set1",
    name: "Alejandra Benzies",
    university: "Acadia University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "abenzies1t@nyu.edu",
  },
  {
    color: "#1ef74c",
    avatar: "https://robohash.org/quisquametcorrupti.png?size=50x50&set=set1",
    name: "Tabbitha Huikerby",
    university: "University of Malawi",
    sentences: "Aliquam non mauris. Morbi non lectus.",
    email: "thuikerby1u@mit.edu",
  },
  {
    color: "#2bcaaa",
    avatar: "https://robohash.org/accusamusetveniam.png?size=50x50&set=set1",
    name: "Constantia Farnham",
    university: "Universidad de Tarapacá",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "cfarnham1v@parallels.com",
  },
  {
    color: "#c1d47f",
    avatar: "https://robohash.org/etsuntest.png?size=50x50&set=set1",
    name: "Krispin Levitt",
    university: "Argosy University",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "klevitt1w@globo.com",
  },
  {
    color: "#8a9bcb",
    avatar: "https://robohash.org/eumtemporedolorum.png?size=50x50&set=set1",
    name: "Meir Bister",
    university: "Kobe International University",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "mbister1x@bloomberg.com",
  },
  {
    color: "#399ba8",
    avatar:
      "https://robohash.org/quosimpeditnecessitatibus.png?size=50x50&set=set1",
    name: "Tomi Bothram",
    university: "Mount Aloysius College",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "tbothram1y@dion.ne.jp",
  },
  {
    color: "#436fc5",
    avatar: "https://robohash.org/temporeminusullam.png?size=50x50&set=set1",
    name: "Janey Heard",
    university: "Physical Education Academy in Katowice",
    sentences: "Integer ac neque.",
    email: "jheard1z@shinystat.com",
  },
  {
    color: "#4375f7",
    avatar: "https://robohash.org/quamquodconsequatur.png?size=50x50&set=set1",
    name: "Ab Drains",
    university: "University of Applied Science and Technology",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "adrains20@webnode.com",
  },
  {
    color: "#a34202",
    avatar: "https://robohash.org/nobisoditvelit.png?size=50x50&set=set1",
    name: "Alphonse Sire",
    university: "The CTL Eurocollege",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "asire21@dyndns.org",
  },
  {
    color: "#abbf1a",
    avatar: "https://robohash.org/voluptasiustosit.png?size=50x50&set=set1",
    name: "Meriel Aleveque",
    university: "Universidad de Cartago",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "maleveque22@google.com.au",
  },
  {
    color: "#def18c",
    avatar:
      "https://robohash.org/etnesciuntdignissimos.png?size=50x50&set=set1",
    name: "Leopold Mildmott",
    university: "Dr. Ram Manohar Lohia Avadh University",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "lmildmott23@about.com",
  },
  {
    color: "#628821",
    avatar: "https://robohash.org/impeditnobisqui.png?size=50x50&set=set1",
    name: "Tate LLelweln",
    university: "Dallas Baptist University",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "tllelweln24@epa.gov",
  },
  {
    color: "#71f535",
    avatar: "https://robohash.org/enimofficiaqui.png?size=50x50&set=set1",
    name: "Gilbertine Banke",
    university: "Port Said University",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "gbanke25@slate.com",
  },
  {
    color: "#855bf3",
    avatar: "https://robohash.org/nobisetadipisci.png?size=50x50&set=set1",
    name: "Gracia Welband",
    university: "Australian Correspondence Schools",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "gwelband26@home.pl",
  },
  {
    color: "#7e8dc8",
    avatar: "https://robohash.org/quieiuspraesentium.png?size=50x50&set=set1",
    name: "Tammy Wyllcocks",
    university: "Université Pierre et Marie Curie (Paris VI)",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "twyllcocks27@state.tx.us",
  },
  {
    color: "#a813e9",
    avatar:
      "https://robohash.org/laudantiumquaeratdolores.png?size=50x50&set=set1",
    name: "Doti Bosence",
    university: "Universidad Arcis",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "dbosence28@sourceforge.net",
  },
  {
    color: "#e73638",
    avatar: "https://robohash.org/rerumremet.png?size=50x50&set=set1",
    name: "Edin Micheau",
    university: "Universidad Mexicana",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "emicheau29@slashdot.org",
  },
  {
    color: "#f494ab",
    avatar:
      "https://robohash.org/molestiasaspernatursed.png?size=50x50&set=set1",
    name: "Marita Marryatt",
    university: "British University in Dubai",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "mmarryatt2a@usa.gov",
  },
  {
    color: "#9eb7f6",
    avatar: "https://robohash.org/atquetemporibusullam.png?size=50x50&set=set1",
    name: "Lavina Botten",
    university: "Suleyman Demirel University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "lbotten2b@mayoclinic.com",
  },
  {
    color: "#278659",
    avatar:
      "https://robohash.org/similiquearchitectodolores.png?size=50x50&set=set1",
    name: "Chester McLeman",
    university: "Pacific Union College",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "cmcleman2c@facebook.com",
  },
  {
    color: "#f364e7",
    avatar: "https://robohash.org/quissequiharum.png?size=50x50&set=set1",
    name: "Eunice Hovington",
    university: "Universidade Federal do Amapá",
    sentences: "Donec posuere metus vitae ipsum.",
    email: "ehovington2d@earthlink.net",
  },
  {
    color: "#44a6ef",
    avatar: "https://robohash.org/optioquoad.png?size=50x50&set=set1",
    name: "Ysabel Brekonridge",
    university: "Ural State University of Economics",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "ybrekonridge2e@merriam-webster.com",
  },
  {
    color: "#95b379",
    avatar:
      "https://robohash.org/eiusreiciendisassumenda.png?size=50x50&set=set1",
    name: "Joly Seares",
    university: "Ecole Française d'Electronique et d'Informatique",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "jseares2f@booking.com",
  },
  {
    color: "#f26633",
    avatar: "https://robohash.org/nisiofficiainventore.png?size=50x50&set=set1",
    name: "Angeli Perrat",
    university: "Northwestern University of the Philippines",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "aperrat2g@wikimedia.org",
  },
  {
    color: "#164548",
    avatar: "https://robohash.org/sedconsequaturvel.png?size=50x50&set=set1",
    name: "Damian Gorriessen",
    university: "Lincoln University Pennsylvania",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "dgorriessen2h@wordpress.com",
  },
  {
    color: "#818015",
    avatar: "https://robohash.org/debitisauteaque.png?size=50x50&set=set1",
    name: "Alanson Summersby",
    university: "Merz Akademie, Hochschule für Gestaltung Stuttgart",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "asummersby2i@diigo.com",
  },
  {
    color: "#f8f3f8",
    avatar:
      "https://robohash.org/voluptatesexplicabodoloremque.png?size=50x50&set=set1",
    name: "Pietrek Genney",
    university: "Kuala Terengganu City Polytechnic",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "pgenney2j@homestead.com",
  },
  {
    color: "#a562f4",
    avatar: "https://robohash.org/idnumquamsint.png?size=50x50&set=set1",
    name: "Jacki Mewhirter",
    university: "Gratz College",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "jmewhirter2k@ning.com",
  },
  {
    color: "#e83ac4",
    avatar: "https://robohash.org/velestvoluptatem.png?size=50x50&set=set1",
    name: "Maisey McBay",
    university: "European Carolus Magnus University",
    sentences: "Donec quis orci eget orci vehicula condimentum.",
    email: "mmcbay2l@infoseek.co.jp",
  },
  {
    color: "#be383d",
    avatar: "https://robohash.org/asperioressedsint.png?size=50x50&set=set1",
    name: "Karolina Lovatt",
    university: "University of Pune",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "klovatt2m@nydailynews.com",
  },
  {
    color: "#0c6f12",
    avatar: "https://robohash.org/quitemporibussint.png?size=50x50&set=set1",
    name: "Riva Mapson",
    university: "Technische Universität Hamburg-Harburg",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "rmapson2n@nature.com",
  },
  {
    color: "#14c92b",
    avatar:
      "https://robohash.org/quisquamarchitectoquam.png?size=50x50&set=set1",
    name: "Jennee de Copeman",
    university: "Yüzüncü Yil (Centennial) University",
    sentences: "Sed vel enim sit amet nunc viverra dapibus.",
    email: "jde2o@domainmarket.com",
  },
  {
    color: "#ff4e94",
    avatar:
      "https://robohash.org/errorsuscipitconsequatur.png?size=50x50&set=set1",
    name: "Emmalee Aveline",
    university: "Université de Kamina",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "eaveline2p@lulu.com",
  },
  {
    color: "#086123",
    avatar:
      "https://robohash.org/quiconsequunturexcepturi.png?size=50x50&set=set1",
    name: "Geralda Soppit",
    university: "Lansbridge University",
    sentences:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "gsoppit2q@state.gov",
  },
  {
    color: "#434099",
    avatar:
      "https://robohash.org/quasrepellendusnesciunt.png?size=50x50&set=set1",
    name: "Weylin Arson",
    university: "Islamic University Kushtia",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "warson2r@wikispaces.com",
  },
  {
    color: "#beeb20",
    avatar: "https://robohash.org/debitisrerumharum.png?size=50x50&set=set1",
    name: "Ban Fraanchyonok",
    university: "Bard Graduate Center for Studies in the Decorative Arts",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "bfraanchyonok2s@bluehost.com",
  },
  {
    color: "#ecca96",
    avatar:
      "https://robohash.org/maioresmolestiaevoluptatem.png?size=50x50&set=set1",
    name: "Jean Crosseland",
    university: "Osaka University of Health and Sport Sciences",
    sentences: "Vivamus tortor.",
    email: "jcrosseland2t@cbslocal.com",
  },
  {
    color: "#eb54b8",
    avatar:
      "https://robohash.org/voluptatemassumendanihil.png?size=50x50&set=set1",
    name: "Hollyanne McArley",
    university: "University of Calgary",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "hmcarley2u@businesswire.com",
  },
  {
    color: "#a0c19e",
    avatar: "https://robohash.org/sitcommodiet.png?size=50x50&set=set1",
    name: "Klara Downing",
    university: "Universidad del Noroeste",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "kdowning2v@guardian.co.uk",
  },
  {
    color: "#62c008",
    avatar: "https://robohash.org/quovelbeatae.png?size=50x50&set=set1",
    name: "Gayle Roswarn",
    university: "Bethel College McKenzie",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "groswarn2w@last.fm",
  },
  {
    color: "#4fbd28",
    avatar:
      "https://robohash.org/autemdelectusquibusdam.png?size=50x50&set=set1",
    name: "Ange MacKnocker",
    university: "Semey State University",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "amacknocker2x@epa.gov",
  },
  {
    color: "#e4fe12",
    avatar:
      "https://robohash.org/excepturienimvoluptatem.png?size=50x50&set=set1",
    name: "Grove Polson",
    university: "Seton Hall University",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "gpolson2y@hud.gov",
  },
  {
    color: "#33dc7c",
    avatar:
      "https://robohash.org/numquamdoloresdolorem.png?size=50x50&set=set1",
    name: "Gabriela Blennerhassett",
    university: "Universidad de Las Palmas de Gran Canaria",
    sentences: "Vivamus vel nulla eget eros elementum pellentesque.",
    email: "gblennerhassett2z@kickstarter.com",
  },
  {
    color: "#672a50",
    avatar: "https://robohash.org/facilissunteius.png?size=50x50&set=set1",
    name: "Lexi Hallstone",
    university: "Linfield College",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "lhallstone30@github.io",
  },
  {
    color: "#fbfec7",
    avatar:
      "https://robohash.org/asperioresipsamaperiam.png?size=50x50&set=set1",
    name: "Trenna Headley",
    university: "Postgraduate lnstitute of Medical Education and Research",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "theadley31@columbia.edu",
  },
  {
    color: "#1a9581",
    avatar: "https://robohash.org/etveroaut.png?size=50x50&set=set1",
    name: "Georges Empringham",
    university: "Engineering Faculty of Asian University",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "gempringham32@si.edu",
  },
  {
    color: "#0cf1c0",
    avatar: "https://robohash.org/blanditiisetquas.png?size=50x50&set=set1",
    name: "Bibi Domaschke",
    university:
      "Belarussian State University of Informatics and Radioelectronics",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "bdomaschke33@github.io",
  },
  {
    color: "#85da8f",
    avatar: "https://robohash.org/numquamaliquidin.png?size=50x50&set=set1",
    name: "Malanie Fawley",
    university: "Northwestern University of the Philippines",
    sentences: "Nulla ac enim.",
    email: "mfawley34@acquirethisname.com",
  },
  {
    color: "#4c8255",
    avatar: "https://robohash.org/maximeetdolore.png?size=50x50&set=set1",
    name: "Margalit Robarts",
    university: "Mahidol University International College",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "mrobarts35@drupal.org",
  },
  {
    color: "#d7ae26",
    avatar:
      "https://robohash.org/repellendusvoluptateexpedita.png?size=50x50&set=set1",
    name: "Dana Jory",
    university: "New York Instiute of Technology",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "djory36@surveymonkey.com",
  },
  {
    color: "#b628b9",
    avatar: "https://robohash.org/omnisullamamet.png?size=50x50&set=set1",
    name: "Dylan Bonnaire",
    university: "China youth college for political science",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "dbonnaire37@spiegel.de",
  },
  {
    color: "#a011e5",
    avatar: "https://robohash.org/isteveritatiset.png?size=50x50&set=set1",
    name: "Jacky Fozzard",
    university: "Tohoku University of Art and Design",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "jfozzard38@a8.net",
  },
  {
    color: "#e203d6",
    avatar: "https://robohash.org/etquiamolestias.png?size=50x50&set=set1",
    name: "Bernard Ingley",
    university: "South China Agricultural University",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "bingley39@com.com",
  },
  {
    color: "#f3aea0",
    avatar: "https://robohash.org/sintametdoloremque.png?size=50x50&set=set1",
    name: "Chaddy Peoples",
    university: "University of Pune",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    email: "cpeoples3a@smugmug.com",
  },
  {
    color: "#20720a",
    avatar: "https://robohash.org/quoatdoloribus.png?size=50x50&set=set1",
    name: "Becca von Grollmann",
    university: "Tashkent School of Finance",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "bvon3b@ed.gov",
  },
  {
    color: "#b33aa0",
    avatar:
      "https://robohash.org/consequatureligendirepellendus.png?size=50x50&set=set1",
    name: "Jenilee Buttriss",
    university: "National Taiwan Ocean University",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    email: "jbuttriss3c@spiegel.de",
  },
  {
    color: "#c0a138",
    avatar:
      "https://robohash.org/sedperspiciatismagnam.png?size=50x50&set=set1",
    name: "Glenda Stile",
    university: "Universitas Proklamasi 45",
    sentences: "Suspendisse potenti.",
    email: "gstile3d@is.gd",
  },
  {
    color: "#c98fed",
    avatar: "https://robohash.org/estquiiusto.png?size=50x50&set=set1",
    name: "Ruperto Birchett",
    university: "Longwood College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "rbirchett3e@blinklist.com",
  },
  {
    color: "#2d02c7",
    avatar:
      "https://robohash.org/quaeratreiciendisunde.png?size=50x50&set=set1",
    name: "Dulcy Cossington",
    university: "Sanjay Gandhi Postgraduate lnstitute of Medical Sciences",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "dcossington3f@quantcast.com",
  },
  {
    color: "#81245b",
    avatar: "https://robohash.org/facereimpeditsed.png?size=50x50&set=set1",
    name: "Saudra Caldera",
    university: "Kanpur University",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "scaldera3g@ca.gov",
  },
  {
    color: "#6bbf23",
    avatar: "https://robohash.org/sedaliquidsaepe.png?size=50x50&set=set1",
    name: "Roscoe Pollard",
    university: "Majan University College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "rpollard3h@canalblog.com",
  },
  {
    color: "#accb67",
    avatar: "https://robohash.org/utomnissit.png?size=50x50&set=set1",
    name: "Alie Simpole",
    university: "University of Mysore",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "asimpole3i@bizjournals.com",
  },
  {
    color: "#030ab5",
    avatar: "https://robohash.org/quametet.png?size=50x50&set=set1",
    name: "Donnell Brabbs",
    university: "University of Texas",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "dbrabbs3j@wiley.com",
  },
  {
    color: "#e1033e",
    avatar: "https://robohash.org/voluptatemaximererum.png?size=50x50&set=set1",
    name: "Rubetta Guilayn",
    university: "Gansu University of Technology",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "rguilayn3k@diigo.com",
  },
  {
    color: "#17093f",
    avatar: "https://robohash.org/facerequasisequi.png?size=50x50&set=set1",
    name: "Sheff Bock",
    university: "Wako University",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "sbock3l@godaddy.com",
  },
  {
    color: "#4702d2",
    avatar: "https://robohash.org/undeillumquasi.png?size=50x50&set=set1",
    name: "Veda Mouatt",
    university: "Baptist Bible College of Missouri",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "vmouatt3m@adobe.com",
  },
  {
    color: "#ec02b2",
    avatar: "https://robohash.org/quiexpeditaomnis.png?size=50x50&set=set1",
    name: "Darcie Van Schafflaer",
    university: "Balqa Applied University",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "dvan3n@4shared.com",
  },
  {
    color: "#9593ae",
    avatar: "https://robohash.org/etnonassumenda.png?size=50x50&set=set1",
    name: "Glyn Epgrave",
    university: "Africa International University",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "gepgrave3o@nymag.com",
  },
  {
    color: "#b64056",
    avatar: "https://robohash.org/autperferendiset.png?size=50x50&set=set1",
    name: "Doe Bazoge",
    university: "Institute of Clinical Social Work",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "dbazoge3p@mit.edu",
  },
  {
    color: "#667c5f",
    avatar: "https://robohash.org/etetmagni.png?size=50x50&set=set1",
    name: "Bobette Pepon",
    university: "Chikushi Jogakuen University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "bpepon3q@berkeley.edu",
  },
  {
    color: "#011ec3",
    avatar: "https://robohash.org/excepturiautet.png?size=50x50&set=set1",
    name: "Northrup Gimson",
    university: "Marian College of Fond Du Lac",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "ngimson3r@behance.net",
  },
  {
    color: "#9e5ffe",
    avatar:
      "https://robohash.org/quosaccusantiumtempora.png?size=50x50&set=set1",
    name: "Kirbie Hazeldine",
    university: "Kohinoor School of Hospitality Management",
    sentences: "Etiam pretium iaculis justo.",
    email: "khazeldine3s@ycombinator.com",
  },
  {
    color: "#a4b96c",
    avatar: "https://robohash.org/idsolutaut.png?size=50x50&set=set1",
    name: "Ely Balazin",
    university: "Damascus University",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "ebalazin3t@washingtonpost.com",
  },
  {
    color: "#938e4a",
    avatar: "https://robohash.org/officiaestrerum.png?size=50x50&set=set1",
    name: "Sammy Duncan",
    university: "Agricultural University of Poznan",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "sduncan3u@earthlink.net",
  },
  {
    color: "#50a62b",
    avatar:
      "https://robohash.org/totamlaborumconsequatur.png?size=50x50&set=set1",
    name: "Emlyn Trent",
    university: "Prince of Songkla University",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "etrent3v@usgs.gov",
  },
  {
    color: "#58bb65",
    avatar: "https://robohash.org/natusaperiameaque.png?size=50x50&set=set1",
    name: "Sammie Merrydew",
    university: "Martin Methodist College",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "smerrydew3w@buzzfeed.com",
  },
  {
    color: "#886017",
    avatar: "https://robohash.org/sintinaut.png?size=50x50&set=set1",
    name: "Wit Gallico",
    university: "Southeastern University",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "wgallico3x@prweb.com",
  },
  {
    color: "#e154a8",
    avatar: "https://robohash.org/quaeratdoloribusqui.png?size=50x50&set=set1",
    name: "Kellby Burtenshaw",
    university: "Universidad Regiomontana",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "kburtenshaw3y@lycos.com",
  },
  {
    color: "#7cdfa8",
    avatar: "https://robohash.org/eumestquia.png?size=50x50&set=set1",
    name: "Flss Fossett",
    university: "Gujarat Technological University Ahmedabad",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    email: "ffossett3z@skype.com",
  },
  {
    color: "#f8639b",
    avatar: "https://robohash.org/illoveritatisiusto.png?size=50x50&set=set1",
    name: "Darby Van de Velde",
    university:
      "City University of New York, John Jay College of Criminal Justice",
    sentences: "Cras in purus eu magna vulputate luctus.",
    email: "dvan40@mtv.com",
  },
  {
    color: "#12e007",
    avatar: "https://robohash.org/estconsequaturenim.png?size=50x50&set=set1",
    name: "Elnar Bulward",
    university: "Institute of Commerce and Business",
    sentences: "Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "ebulward41@home.pl",
  },
  {
    color: "#cf53eb",
    avatar:
      "https://robohash.org/quaeratvoluptatedolorem.png?size=50x50&set=set1",
    name: "Tasia Gajownik",
    university:
      "Ecole Nationale d'Ingénieurs des Techniques des Industries Agricoles et Alimentaires",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "tgajownik42@state.tx.us",
  },
  {
    color: "#50a096",
    avatar:
      "https://robohash.org/nesciuntlaboriosampossimus.png?size=50x50&set=set1",
    name: "Den Stemp",
    university: "University of Hargeisa",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "dstemp43@t-online.de",
  },
  {
    color: "#944e53",
    avatar: "https://robohash.org/eiusoptioet.png?size=50x50&set=set1",
    name: "Renelle Caraher",
    university: "Westmont College",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "rcaraher44@hao123.com",
  },
  {
    color: "#c70381",
    avatar: "https://robohash.org/autemtotamomnis.png?size=50x50&set=set1",
    name: "Selig Ladewig",
    university: "American University of the Caribbean, Sint Maarten",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "sladewig45@google.pl",
  },
  {
    color: "#86386c",
    avatar: "https://robohash.org/velessevoluptatem.png?size=50x50&set=set1",
    name: "Kendricks Zellmer",
    university: "Africa University",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "kzellmer46@sphinn.com",
  },
  {
    color: "#d890d4",
    avatar: "https://robohash.org/nihilauthic.png?size=50x50&set=set1",
    name: "Dana Ruberry",
    university: "University of Western Ontario",
    sentences: "Aenean fermentum.",
    email: "druberry47@jugem.jp",
  },
  {
    color: "#c1635b",
    avatar:
      "https://robohash.org/estnostrumexercitationem.png?size=50x50&set=set1",
    name: "Shaylah O'Crevy",
    university: "Kermanshah University of Technology",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "socrevy48@qq.com",
  },
  {
    color: "#2f906c",
    avatar:
      "https://robohash.org/reprehenderitnesciunta.png?size=50x50&set=set1",
    name: "Leora Bachelar",
    university: "COMSATS Institute of Information Technology",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "lbachelar49@freewebs.com",
  },
  {
    color: "#96a311",
    avatar: "https://robohash.org/autmodireiciendis.png?size=50x50&set=set1",
    name: "Bessy Keenor",
    university:
      "Ecole Nationale Supérieure d'Ingenieurs Electriciens de Grenoble",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "bkeenor4a@amazonaws.com",
  },
  {
    color: "#a5402a",
    avatar: "https://robohash.org/autdictaaut.png?size=50x50&set=set1",
    name: "Raquel Lecointe",
    university: "Kazan State Pedagogical University",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "rlecointe4b@reuters.com",
  },
  {
    color: "#d6167c",
    avatar: "https://robohash.org/deseruntquiaeveniet.png?size=50x50&set=set1",
    name: "Kirsteni Jarritt",
    university: "Universitas Paramadina Mulya",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "kjarritt4c@yahoo.com",
  },
  {
    color: "#bdd817",
    avatar: "https://robohash.org/quimolestiaetempore.png?size=50x50&set=set1",
    name: "Ricca Wortt",
    university: "Université de Versailles Saint-Quentin-en-Yvelines",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "rwortt4d@nationalgeographic.com",
  },
  {
    color: "#f74f06",
    avatar: "https://robohash.org/etinciduntmaxime.png?size=50x50&set=set1",
    name: "Lacey Shah",
    university: "Institut Commercial de Nancy",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "lshah4e@blinklist.com",
  },
  {
    color: "#b78b04",
    avatar: "https://robohash.org/essequisvoluptatum.png?size=50x50&set=set1",
    name: "Joann McNalley",
    university: "Selkirk College",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "jmcnalley4f@examiner.com",
  },
  {
    color: "#d6b88e",
    avatar: "https://robohash.org/estculpaut.png?size=50x50&set=set1",
    name: "Caspar Visco",
    university: "Bennington College",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "cvisco4g@fda.gov",
  },
  {
    color: "#56d85e",
    avatar: "https://robohash.org/voluptatumutmaiores.png?size=50x50&set=set1",
    name: "Gifford Saffill",
    university: "Islamic Azad University, Gorgan",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "gsaffill4h@yelp.com",
  },
  {
    color: "#da265d",
    avatar: "https://robohash.org/molestiaeimpeditsit.png?size=50x50&set=set1",
    name: "Aile Crebbin",
    university: "Islamic Azad University, Shahr-e-rey Branch",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "acrebbin4i@dmoz.org",
  },
  {
    color: "#8f9450",
    avatar: "https://robohash.org/laborevoluptatibusad.png?size=50x50&set=set1",
    name: "Russell McKea",
    university: "Universidade Autónoma de Lisboa Luís de Camoes",
    sentences:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "rmckea4j@technorati.com",
  },
  {
    color: "#f1733f",
    avatar: "https://robohash.org/optioetut.png?size=50x50&set=set1",
    name: "Thibaut Buckell",
    university: "Universidad Hispanoamericana",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "tbuckell4k@intel.com",
  },
  {
    color: "#ea6a8c",
    avatar:
      "https://robohash.org/voluptatempossimuscupiditate.png?size=50x50&set=set1",
    name: "Joyann Cella",
    university: "Universidad Estatal de Bolívar",
    sentences: "Proin at turpis a pede posuere nonummy.",
    email: "jcella4l@imageshack.us",
  },
  {
    color: "#3e2b41",
    avatar:
      "https://robohash.org/invelitnecessitatibus.png?size=50x50&set=set1",
    name: "Ruthann Flucks",
    university: "National Open University",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "rflucks4m@ebay.co.uk",
  },
  {
    color: "#d42c91",
    avatar: "https://robohash.org/verodoloresfugit.png?size=50x50&set=set1",
    name: "Herta Gianiello",
    university: "Athenaeum of Ohio",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "hgianiello4n@abc.net.au",
  },
  {
    color: "#f1d7b2",
    avatar:
      "https://robohash.org/remnesciuntdignissimos.png?size=50x50&set=set1",
    name: "Rosamond Enos",
    university: "Tomball College",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "renos4o@ucla.edu",
  },
  {
    color: "#1bff46",
    avatar:
      "https://robohash.org/quisfacereconsequatur.png?size=50x50&set=set1",
    name: "Evelina Linge",
    university: "Georgia Baptist College of Nursing",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "elinge4p@nature.com",
  },
  {
    color: "#9ce278",
    avatar:
      "https://robohash.org/nobisperspiciatisrerum.png?size=50x50&set=set1",
    name: "Brendin Cuthill",
    university: "Technological University (Myitkyina) ",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "bcuthill4q@clickbank.net",
  },
  {
    color: "#317297",
    avatar:
      "https://robohash.org/voluptatumsintnumquam.png?size=50x50&set=set1",
    name: "Vale Hathaway",
    university: "North South University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "vhathaway4r@macromedia.com",
  },
  {
    color: "#5c3d57",
    avatar: "https://robohash.org/namomnisperferendis.png?size=50x50&set=set1",
    name: "Modestia Ballintyne",
    university: "Zaporizhzhe National University",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    email: "mballintyne4s@earthlink.net",
  },
  {
    color: "#7c8c02",
    avatar: "https://robohash.org/liberofugaab.png?size=50x50&set=set1",
    name: "Bobbye Du Barry",
    university: "Université des Montagnes",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "bdu4t@washingtonpost.com",
  },
  {
    color: "#072a81",
    avatar: "https://robohash.org/eaquequisquamsed.png?size=50x50&set=set1",
    name: "Camey Rochewell",
    university: "Tohoku Institute of Technology",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "crochewell4u@google.com.br",
  },
  {
    color: "#afc7cf",
    avatar: "https://robohash.org/sitquamrerum.png?size=50x50&set=set1",
    name: "Zacherie Bollon",
    university: "Brigham Young University",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "zbollon4v@netlog.com",
  },
  {
    color: "#c72715",
    avatar:
      "https://robohash.org/namvoluptatemconsequatur.png?size=50x50&set=set1",
    name: "Bibbie Fewless",
    university: "Universität Graz",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "bfewless4w@dyndns.org",
  },
  {
    color: "#ed0076",
    avatar: "https://robohash.org/quiaautcorporis.png?size=50x50&set=set1",
    name: "Adler Blondell",
    university: "National Institute of Industrial Engineering",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "ablondell4x@issuu.com",
  },
  {
    color: "#d8741b",
    avatar:
      "https://robohash.org/cumaccusantiumdeserunt.png?size=50x50&set=set1",
    name: "Albrecht Dimond",
    university:
      "Schiller International University, American College of Switzerland",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "adimond4y@sciencedirect.com",
  },
  {
    color: "#229780",
    avatar: "https://robohash.org/suntporrorerum.png?size=50x50&set=set1",
    name: "Nert Caldwell",
    university: "National Pedagogical University M. Dragomanov ",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "ncaldwell4z@marriott.com",
  },
  {
    color: "#dae18f",
    avatar: "https://robohash.org/dolorporroet.png?size=50x50&set=set1",
    name: "Herve Widdop",
    university: "Hochschule Coburg",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "hwiddop50@reference.com",
  },
  {
    color: "#3295a4",
    avatar: "https://robohash.org/nullaipsamtemporibus.png?size=50x50&set=set1",
    name: "Allsun Tickel",
    university: "Chongqing Wenli University",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "atickel51@omniture.com",
  },
  {
    color: "#f8e7eb",
    avatar: "https://robohash.org/atqueutminima.png?size=50x50&set=set1",
    name: "Lawrence Lighten",
    university: "Vellore Institute of Technology",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "llighten52@feedburner.com",
  },
  {
    color: "#393ef5",
    avatar:
      "https://robohash.org/rationerecusandaeunde.png?size=50x50&set=set1",
    name: "Larry Smidmoor",
    university: "Davenport College of Business, Grand Rapids",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "lsmidmoor53@comsenz.com",
  },
  {
    color: "#089836",
    avatar:
      "https://robohash.org/nostrumaliquamperspiciatis.png?size=50x50&set=set1",
    name: "Stesha Civitillo",
    university: "Kuban State University of Technology",
    sentences: "Vestibulum rutrum rutrum neque.",
    email: "scivitillo54@oakley.com",
  },
  {
    color: "#8ab695",
    avatar:
      "https://robohash.org/similiquelaboriosamtempore.png?size=50x50&set=set1",
    name: "Harli Collinson",
    university: "Seattle Pacific University",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "hcollinson55@icio.us",
  },
  {
    color: "#38c44f",
    avatar: "https://robohash.org/voluptatemquiaut.png?size=50x50&set=set1",
    name: "Annabell Minot",
    university: "Allegheny College",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "aminot56@shinystat.com",
  },
  {
    color: "#b2b350",
    avatar: "https://robohash.org/quaesunteveniet.png?size=50x50&set=set1",
    name: "Marchelle Crolla",
    university: "Ishinomaki Senshu University",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "mcrolla57@who.int",
  },
  {
    color: "#b74b31",
    avatar: "https://robohash.org/nihildeseruntquaerat.png?size=50x50&set=set1",
    name: "Maudie Castelot",
    university: "Kanpur University",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "mcastelot58@cmu.edu",
  },
  {
    color: "#f267e2",
    avatar: "https://robohash.org/quaeharumvoluptate.png?size=50x50&set=set1",
    name: "Karee Forde",
    university: "Salam University",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "kforde59@stanford.edu",
  },
  {
    color: "#8d4965",
    avatar: "https://robohash.org/enimremipsa.png?size=50x50&set=set1",
    name: "Jennie Feely",
    university: "Vikram University",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "jfeely5a@dedecms.com",
  },
  {
    color: "#5c73a0",
    avatar: "https://robohash.org/etperferendisdolorem.png?size=50x50&set=set1",
    name: "Wood Batterson",
    university: "Ecole Polytechnique",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "wbatterson5b@abc.net.au",
  },
  {
    color: "#b81024",
    avatar:
      "https://robohash.org/praesentiummodicupiditate.png?size=50x50&set=set1",
    name: "Tannie Layland",
    university: "Melaka City Polytechnic",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "tlayland5c@reddit.com",
  },
  {
    color: "#de19d0",
    avatar: "https://robohash.org/aliquametqui.png?size=50x50&set=set1",
    name: "Ailina Kirvin",
    university: "Royal Free Hospital School of Medicine, University of London",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "akirvin5d@springer.com",
  },
  {
    color: "#c6ef77",
    avatar: "https://robohash.org/etatarchitecto.png?size=50x50&set=set1",
    name: "Aaron Swepstone",
    university: "Buddhist and Pali University of Sri Lanka",
    sentences: "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "aswepstone5e@rambler.ru",
  },
  {
    color: "#872c75",
    avatar: "https://robohash.org/beataequaedolores.png?size=50x50&set=set1",
    name: "Nerti Gow",
    university: "Qingdao University of Science and Technology",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "ngow5f@weather.com",
  },
  {
    color: "#29bc70",
    avatar: "https://robohash.org/noncumquedolor.png?size=50x50&set=set1",
    name: "Rey Wield",
    university: "Université Louis Pasteur (Strasbourg I)",
    sentences: "In hac habitasse platea dictumst.",
    email: "rwield5g@who.int",
  },
  {
    color: "#c2c84a",
    avatar: "https://robohash.org/suntinventorequi.png?size=50x50&set=set1",
    name: "Demetre Inchan",
    university: "Universidad Ricardo Palma",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "dinchan5h@pen.io",
  },
  {
    color: "#10d198",
    avatar: "https://robohash.org/namcumquenon.png?size=50x50&set=set1",
    name: "Stan Thelwll",
    university: "Royal University of Bhutan",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "sthelwll5i@dmoz.org",
  },
  {
    color: "#5ec364",
    avatar: "https://robohash.org/temporibusfugaillo.png?size=50x50&set=set1",
    name: "Margareta Abrams",
    university: 'Universidad Tecnologica "Vicente Perez Rosales"',
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "mabrams5j@cbsnews.com",
  },
  {
    color: "#ecd290",
    avatar: "https://robohash.org/nondoloredolorum.png?size=50x50&set=set1",
    name: "Jodi Parvin",
    university: "Tokyo University of Pharmacy and Life Science",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "jparvin5k@goo.gl",
  },
  {
    color: "#4502bd",
    avatar: "https://robohash.org/etquoquo.png?size=50x50&set=set1",
    name: "Cal Wadley",
    university: "Birmingham-Southern College",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "cwadley5l@unesco.org",
  },
  {
    color: "#1f5466",
    avatar: "https://robohash.org/assumendaquipariatur.png?size=50x50&set=set1",
    name: "Davida Macconachy",
    university: "Pontifcia Università Gregoriana",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "dmacconachy5m@comcast.net",
  },
  {
    color: "#411891",
    avatar: "https://robohash.org/totamfugitaut.png?size=50x50&set=set1",
    name: "Allie Crummay",
    university: "King Faisal University",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "acrummay5n@engadget.com",
  },
  {
    color: "#10e45b",
    avatar: "https://robohash.org/fugitenimfacere.png?size=50x50&set=set1",
    name: "Claudette Collett",
    university: "Kansai University",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "ccollett5o@indiatimes.com",
  },
  {
    color: "#643188",
    avatar:
      "https://robohash.org/accusamusofficialaborum.png?size=50x50&set=set1",
    name: "Keslie Eger",
    university: "Kuala Lumpur Metropolitan University",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "keger5p@blog.com",
  },
  {
    color: "#291ac7",
    avatar:
      "https://robohash.org/autconsequunturvoluptatum.png?size=50x50&set=set1",
    name: "Renaldo Munn",
    university: "Shiraz Payamnoor University",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "rmunn5q@yolasite.com",
  },
  {
    color: "#eb8290",
    avatar: "https://robohash.org/magnivoluptaset.png?size=50x50&set=set1",
    name: "Iorgos Berrick",
    university: "University of Hull",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "iberrick5r@mozilla.org",
  },
  {
    color: "#649f9d",
    avatar: "https://robohash.org/atenimvel.png?size=50x50&set=set1",
    name: "Nertie Shields",
    university: "Massey University",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "nshields5s@timesonline.co.uk",
  },
  {
    color: "#d870f7",
    avatar: "https://robohash.org/etnumquamculpa.png?size=50x50&set=set1",
    name: "Jennifer Elsie",
    university: "Sanaag University of Science and Technology",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "jelsie5t@omniture.com",
  },
  {
    color: "#b6e476",
    avatar:
      "https://robohash.org/voluptatumfacereaccusamus.png?size=50x50&set=set1",
    name: "Floria Symes",
    university: "Malmö University College",
    sentences: "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "fsymes5u@google.es",
  },
  {
    color: "#14c75d",
    avatar:
      "https://robohash.org/quipariaturconsectetur.png?size=50x50&set=set1",
    name: "Mara Brade",
    university: "Fachhochschule Nordostniedersachsen",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "mbrade5v@senate.gov",
  },
  {
    color: "#60ca87",
    avatar: "https://robohash.org/quidemsimiliquenon.png?size=50x50&set=set1",
    name: "Max Fuzzard",
    university: "University of Connecticut at Hartford",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "mfuzzard5w@bloglines.com",
  },
  {
    color: "#d731fc",
    avatar: "https://robohash.org/quideminmolestiae.png?size=50x50&set=set1",
    name: "Clarisse McUre",
    university: "Concordia University, Irvine",
    sentences: "Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "cmcure5x@hp.com",
  },
  {
    color: "#db9af6",
    avatar: "https://robohash.org/possimussintenim.png?size=50x50&set=set1",
    name: "Selestina Drees",
    university: "Medizinische Hochschule Hannover",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "sdrees5y@merriam-webster.com",
  },
  {
    color: "#40b414",
    avatar: "https://robohash.org/iddoloribusfacilis.png?size=50x50&set=set1",
    name: "Rosemaria Ashman",
    university: "Privredna Akademija (Business Academy)",
    sentences:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "rashman5z@mit.edu",
  },
  {
    color: "#8894d4",
    avatar: "https://robohash.org/aeligendiab.png?size=50x50&set=set1",
    name: "Anjela Gravie",
    university: "University College of Cape Breton",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "agravie60@prweb.com",
  },
  {
    color: "#309997",
    avatar: "https://robohash.org/voluptatesiurevelit.png?size=50x50&set=set1",
    name: "Bella Klagges",
    university: "Morehead State University",
    sentences: "Pellentesque at nulla. Suspendisse potenti.",
    email: "bklagges61@about.com",
  },
  {
    color: "#9b5858",
    avatar:
      "https://robohash.org/rationeeligenditenetur.png?size=50x50&set=set1",
    name: "Esmaria Ghidelli",
    university: "Chiang Mai Vocational College",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "eghidelli62@skype.com",
  },
  {
    color: "#58b65c",
    avatar: "https://robohash.org/quaenamut.png?size=50x50&set=set1",
    name: "Renata Jephcott",
    university: "Inönü University",
    sentences: "Praesent id massa id nisl venenatis lacinia.",
    email: "rjephcott63@ucoz.ru",
  },
  {
    color: "#de15dc",
    avatar:
      "https://robohash.org/pariaturrepellatnatus.png?size=50x50&set=set1",
    name: "Flem O' Scallan",
    university: "University of Dongola",
    sentences: "Nulla tellus. In sagittis dui vel nisl.",
    email: "fo64@foxnews.com",
  },
  {
    color: "#d0a1fc",
    avatar:
      "https://robohash.org/etlaboriosamassumenda.png?size=50x50&set=set1",
    name: "Amalia Readwin",
    university: "Teachers College, Columbia University",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "areadwin65@desdev.cn",
  },
  {
    color: "#411bbd",
    avatar: "https://robohash.org/etdelenitieaque.png?size=50x50&set=set1",
    name: "Yolane Hendin",
    university: "Spiru Haret University",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "yhendin66@mit.edu",
  },
  {
    color: "#f69177",
    avatar: "https://robohash.org/eumoccaecatianimi.png?size=50x50&set=set1",
    name: "Clemmie Pollicatt",
    university: "Universidad de La Salle",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "cpollicatt67@omniture.com",
  },
  {
    color: "#dca1d7",
    avatar: "https://robohash.org/quitemporibusab.png?size=50x50&set=set1",
    name: "Janice Leupoldt",
    university: "Perm State Medical Academy",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "jleupoldt68@w3.org",
  },
  {
    color: "#5e8d64",
    avatar: "https://robohash.org/arerumsunt.png?size=50x50&set=set1",
    name: "Albert Dallman",
    university: "Higher Technological Institute",
    sentences: "Sed accumsan felis.",
    email: "adallman69@zimbio.com",
  },
  {
    color: "#cd5fc3",
    avatar: "https://robohash.org/iustoveroeos.png?size=50x50&set=set1",
    name: "Hewet Lugsdin",
    university: "Bosaso College",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "hlugsdin6a@chron.com",
  },
  {
    color: "#14a403",
    avatar: "https://robohash.org/quasiautodit.png?size=50x50&set=set1",
    name: "Shelley Kelf",
    university: "State University of New York College at Oneonta",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "skelf6b@clickbank.net",
  },
  {
    color: "#308be3",
    avatar: "https://robohash.org/utsintdoloribus.png?size=50x50&set=set1",
    name: "Forrest Sare",
    university: "Universidad Nacional de San Cristóbal de Huamanga",
    sentences: "Morbi a ipsum.",
    email: "fsare6c@businesswire.com",
  },
  {
    color: "#a5e495",
    avatar: "https://robohash.org/totamdelenitidolor.png?size=50x50&set=set1",
    name: "Sargent Showalter",
    university: "Tilburg University",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "sshowalter6d@moonfruit.com",
  },
  {
    color: "#864ca0",
    avatar: "https://robohash.org/errorsaepeest.png?size=50x50&set=set1",
    name: "Sydel Gyver",
    university: "Suzuka International University",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "sgyver6e@foxnews.com",
  },
  {
    color: "#7ede7f",
    avatar: "https://robohash.org/sintetassumenda.png?size=50x50&set=set1",
    name: "Saba Girardi",
    university:
      "Ecole pour les Etudes et la Recherche en Informatique et Electronique",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "sgirardi6f@google.com.au",
  },
  {
    color: "#03127a",
    avatar: "https://robohash.org/istesimiliqueveniam.png?size=50x50&set=set1",
    name: "Danila Connolly",
    university:
      "Ecole Nationale Supérieure d'Electrochimie et d'Electrométallurgie de Gernoble",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "dconnolly6g@va.gov",
  },
  {
    color: "#22dd78",
    avatar:
      "https://robohash.org/doloremtotamtemporibus.png?size=50x50&set=set1",
    name: "Kerr Jest",
    university: "Augusta State University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "kjest6h@google.fr",
  },
  {
    color: "#947cfa",
    avatar:
      "https://robohash.org/facilisdistinctiocommodi.png?size=50x50&set=set1",
    name: "Fayre Courtin",
    university: "Hubert Kairuki Memorial University",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "fcourtin6i@delicious.com",
  },
  {
    color: "#14e9cd",
    avatar: "https://robohash.org/consequaturnamvelit.png?size=50x50&set=set1",
    name: "Ninetta Gotcher",
    university:
      "Ecole Nationale Supérieure d'Electronique et de Radioelectricite de Bordeaux",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "ngotcher6j@gizmodo.com",
  },
  {
    color: "#1d89ab",
    avatar: "https://robohash.org/remautvoluptatem.png?size=50x50&set=set1",
    name: "Heddie Diche",
    university: "DeVry Institute of Technology, Pomona",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "hdiche6k@state.tx.us",
  },
  {
    color: "#ee31b1",
    avatar:
      "https://robohash.org/sequivoluptatemtenetur.png?size=50x50&set=set1",
    name: "Shelia Guirard",
    university: "University of the Thai Chamber of Commerce",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "sguirard6l@berkeley.edu",
  },
  {
    color: "#2a9dd7",
    avatar: "https://robohash.org/sedodionemo.png?size=50x50&set=set1",
    name: "Kaycee Rolley",
    university: "Southeast University",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "krolley6m@timesonline.co.uk",
  },
  {
    color: "#b8fed0",
    avatar: "https://robohash.org/enimfugitqui.png?size=50x50&set=set1",
    name: "Carina Elcombe",
    university: "Medizinische Universität Graz",
    sentences: "In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "celcombe6n@cmu.edu",
  },
  {
    color: "#33d1e5",
    avatar: "https://robohash.org/eaqueetvoluptas.png?size=50x50&set=set1",
    name: "Jenna Cruikshank",
    university: "Northwest University Xi'an",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "jcruikshank6o@omniture.com",
  },
  {
    color: "#48c2e6",
    avatar: "https://robohash.org/aofficiaexcepturi.png?size=50x50&set=set1",
    name: "Georgetta Dainter",
    university: "Fachhochschule Aschaffenburg",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "gdainter6p@cafepress.com",
  },
  {
    color: "#c7c42d",
    avatar: "https://robohash.org/quiquiitaque.png?size=50x50&set=set1",
    name: "Angelo Mussolini",
    university: "University of Applied Sciences",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "amussolini6q@unicef.org",
  },
  {
    color: "#a9efe2",
    avatar:
      "https://robohash.org/doloremqueminusquidem.png?size=50x50&set=set1",
    name: "Honey Engelmann",
    university: "Kurume University",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "hengelmann6r@newyorker.com",
  },
  {
    color: "#6cbc41",
    avatar: "https://robohash.org/quoitaquequi.png?size=50x50&set=set1",
    name: "Prentice Nancarrow",
    university: "Tunghai University",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "pnancarrow6s@booking.com",
  },
  {
    color: "#6a1690",
    avatar: "https://robohash.org/utetrerum.png?size=50x50&set=set1",
    name: "Eustacia Mattosoff",
    university: "Universidad Nueva San Salvador",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "emattosoff6t@t.co",
  },
  {
    color: "#b1dd3b",
    avatar:
      "https://robohash.org/deseruntomnisrepudiandae.png?size=50x50&set=set1",
    name: "Aile Trahmel",
    university: "California Coast University",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "atrahmel6u@yellowpages.com",
  },
  {
    color: "#ba57d9",
    avatar: "https://robohash.org/quiseapossimus.png?size=50x50&set=set1",
    name: "Cyril Giocannoni",
    university: "University of Arkansas for Medical Sciences",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "cgiocannoni6v@google.pl",
  },
  {
    color: "#348152",
    avatar:
      "https://robohash.org/voluptasvelitaspernatur.png?size=50x50&set=set1",
    name: "Catharine Caush",
    university: "Koforidua Polytechnic ",
    sentences: "Mauris lacinia sapien quis libero.",
    email: "ccaush6w@cnn.com",
  },
  {
    color: "#91e2bb",
    avatar: "https://robohash.org/etdolorestemporibus.png?size=50x50&set=set1",
    name: "Marlyn Cubitt",
    university:
      "University of the East, Ramon Magsaysay Memorial Medical Center",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "mcubitt6x@hugedomains.com",
  },
  {
    color: "#ae2f40",
    avatar:
      "https://robohash.org/quaeratvoluptatumconsectetur.png?size=50x50&set=set1",
    name: "Arther Maddocks",
    university: "Bangabandhu Sheikh Mujibur Rahman Medical University",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "amaddocks6y@zdnet.com",
  },
  {
    color: "#26ace7",
    avatar: "https://robohash.org/teneturestnon.png?size=50x50&set=set1",
    name: "Nilson Bradbury",
    university: "Université de Technologie de Compiègne",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "nbradbury6z@ask.com",
  },
  {
    color: "#e23a79",
    avatar: "https://robohash.org/suntdolorescorporis.png?size=50x50&set=set1",
    name: "Wallie Gaunter",
    university: "Banaras Hindu University",
    sentences: "Integer a nibh.",
    email: "wgaunter70@unc.edu",
  },
  {
    color: "#9ca391",
    avatar: "https://robohash.org/minimacumblanditiis.png?size=50x50&set=set1",
    name: "Wendeline Sincock",
    university: "Fachhochschule Neubrandenburg",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "wsincock71@wikia.com",
  },
  {
    color: "#aa7167",
    avatar:
      "https://robohash.org/consequaturnequeporro.png?size=50x50&set=set1",
    name: "Eleni Jacobovitz",
    university: "University of Tampere",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "ejacobovitz72@trellian.com",
  },
  {
    color: "#d6a642",
    avatar: "https://robohash.org/animienimvelit.png?size=50x50&set=set1",
    name: "Ardra Jumel",
    university: "Universidade de Alfenas",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "ajumel73@slideshare.net",
  },
  {
    color: "#b68df2",
    avatar: "https://robohash.org/etassumendaipsam.png?size=50x50&set=set1",
    name: "Barbie Rawlinson",
    university: "University of Bohol",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    email: "brawlinson74@dell.com",
  },
  {
    color: "#638726",
    avatar: "https://robohash.org/adipiscisuntaut.png?size=50x50&set=set1",
    name: "Jerrilyn Farnworth",
    university: "Khon Kaen University",
    sentences: "Integer a nibh.",
    email: "jfarnworth75@webeden.co.uk",
  },
  {
    color: "#4ea85c",
    avatar: "https://robohash.org/voluptatibusveleos.png?size=50x50&set=set1",
    name: "Hale Brugh",
    university: "Shanghai TieDao University",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "hbrugh76@artisteer.com",
  },
  {
    color: "#8a4211",
    avatar: "https://robohash.org/teneturnullaquaerat.png?size=50x50&set=set1",
    name: "Waverly Zorer",
    university: "Guangxi Traditional Chinese Medical University",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "wzorer77@fema.gov",
  },
  {
    color: "#fefffa",
    avatar: "https://robohash.org/fugaprovidentquo.png?size=50x50&set=set1",
    name: "Stefano Huge",
    university: "Hokkaido University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "shuge78@51.la",
  },
  {
    color: "#110e01",
    avatar: "https://robohash.org/velitutlabore.png?size=50x50&set=set1",
    name: "Clarisse O'Hegertie",
    university: "Egerton University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "cohegertie79@jiathis.com",
  },
  {
    color: "#f23822",
    avatar: "https://robohash.org/cumquiquo.png?size=50x50&set=set1",
    name: "Galina Rodenburgh",
    university: "TPM College",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "grodenburgh7a@columbia.edu",
  },
  {
    color: "#b91c0f",
    avatar: "https://robohash.org/aminimaest.png?size=50x50&set=set1",
    name: "Nissa Vowells",
    university: "San Diego University for Integrative Studies",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "nvowells7b@bbb.org",
  },
  {
    color: "#d9b694",
    avatar:
      "https://robohash.org/omnissuntconsequuntur.png?size=50x50&set=set1",
    name: "Merrill Hosier",
    university: "Multimedia University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "mhosier7c@skype.com",
  },
  {
    color: "#305a2e",
    avatar: "https://robohash.org/istecupiditateea.png?size=50x50&set=set1",
    name: "Tibold Washbrook",
    university: "Asia E University",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "twashbrook7d@webeden.co.uk",
  },
  {
    color: "#7ffc7c",
    avatar: "https://robohash.org/dolorestminus.png?size=50x50&set=set1",
    name: "Alexandr Gillbanks",
    university: "Modern University for the Humanities",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "agillbanks7e@nih.gov",
  },
  {
    color: "#59cc86",
    avatar: "https://robohash.org/nonquosdelectus.png?size=50x50&set=set1",
    name: "Ingeborg Parlett",
    university: "University of Wollongong",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "iparlett7f@omniture.com",
  },
  {
    color: "#2ecab8",
    avatar: "https://robohash.org/evenietquiaincidunt.png?size=50x50&set=set1",
    name: "Joli Nulty",
    university: "United States Air Force Academy",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "jnulty7g@163.com",
  },
  {
    color: "#ca06f4",
    avatar: "https://robohash.org/facerenumquameius.png?size=50x50&set=set1",
    name: "Marie-jeanne Terron",
    university: "Tokyo Gakugei University",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "mterron7h@xrea.com",
  },
  {
    color: "#c79def",
    avatar: "https://robohash.org/blanditiistotamqui.png?size=50x50&set=set1",
    name: "Fallon Bilson",
    university: "Tomsk State University",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "fbilson7i@dropbox.com",
  },
  {
    color: "#cdb387",
    avatar:
      "https://robohash.org/estvoluptatesnecessitatibus.png?size=50x50&set=set1",
    name: "Isahella Tyt",
    university: "Fresno Pacific University",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "ityt7j@163.com",
  },
  {
    color: "#fa82f0",
    avatar: "https://robohash.org/adnullaofficiis.png?size=50x50&set=set1",
    name: "Joceline Burgoyne",
    university: "Université de La Rochelle",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "jburgoyne7k@deliciousdays.com",
  },
  {
    color: "#e27d36",
    avatar:
      "https://robohash.org/maximeexplicabomolestias.png?size=50x50&set=set1",
    name: "Alonzo Hallagan",
    university: "Norton University",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "ahallagan7l@nymag.com",
  },
  {
    color: "#d16e73",
    avatar: "https://robohash.org/etvoluptatesquae.png?size=50x50&set=set1",
    name: "Rustie Kristufek",
    university: "Capitol College",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "rkristufek7m@google.de",
  },
  {
    color: "#f1f80e",
    avatar: "https://robohash.org/incummolestiae.png?size=50x50&set=set1",
    name: "Jacinda McGonigle",
    university: "Al-Manar University",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "jmcgonigle7n@kickstarter.com",
  },
  {
    color: "#ca1813",
    avatar: "https://robohash.org/quiaspernaturatque.png?size=50x50&set=set1",
    name: "Alan Bittany",
    university: "Universidad de Panamá",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "abittany7o@ebay.com",
  },
  {
    color: "#708573",
    avatar:
      "https://robohash.org/accusantiumnecessitatibusut.png?size=50x50&set=set1",
    name: "Dodi Duiged",
    university: "Lebanese International University",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "dduiged7p@columbia.edu",
  },
  {
    color: "#58f327",
    avatar: "https://robohash.org/pariatursolutanon.png?size=50x50&set=set1",
    name: "Dorice Hysom",
    university: "Universidad de Los Andes",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "dhysom7q@plala.or.jp",
  },
  {
    color: "#35d2c9",
    avatar:
      "https://robohash.org/eaqueaccusantiumquibusdam.png?size=50x50&set=set1",
    name: "Lorita Bushby",
    university: "Musashino Academy of Music",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "lbushby7r@godaddy.com",
  },
  {
    color: "#b16484",
    avatar: "https://robohash.org/vitaererumillum.png?size=50x50&set=set1",
    name: "Sumner Haizelden",
    university: "Warsaw School of Social Psychology",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "shaizelden7s@reuters.com",
  },
  {
    color: "#a8063d",
    avatar: "https://robohash.org/sequiillodolore.png?size=50x50&set=set1",
    name: "Hashim Bunyard",
    university: "Fachhochschule Bielefeld",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "hbunyard7t@ow.ly",
  },
  {
    color: "#854039",
    avatar: "https://robohash.org/numquamnonquia.png?size=50x50&set=set1",
    name: "Raynell Tunnah",
    university: "Saratov State Technical University",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "rtunnah7u@boston.com",
  },
  {
    color: "#da13fe",
    avatar:
      "https://robohash.org/molestiasullamconsequuntur.png?size=50x50&set=set1",
    name: "Hadlee Spiers",
    university: "Yerevan State Medical University",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "hspiers7v@sourceforge.net",
  },
  {
    color: "#3dc4b1",
    avatar:
      "https://robohash.org/eosexercitationemnecessitatibus.png?size=50x50&set=set1",
    name: "Cyrus Firmage",
    university: "Massachusetts College of Liberal Arts",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "cfirmage7w@issuu.com",
  },
  {
    color: "#2f210c",
    avatar: "https://robohash.org/anostrumquod.png?size=50x50&set=set1",
    name: "Bernadene Auchinleck",
    university: "St. Francis College, Loretto",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    email: "bauchinleck7x@rediff.com",
  },
  {
    color: "#06a16f",
    avatar: "https://robohash.org/estnonfacere.png?size=50x50&set=set1",
    name: "Daphna Lovelace",
    university: "Kazan State Music Conservatory",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "dlovelace7y@google.ru",
  },
  {
    color: "#c33740",
    avatar: "https://robohash.org/quoeaqueest.png?size=50x50&set=set1",
    name: "Deane Kelledy",
    university: "University of Nottingham, Malaysia Campus",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "dkelledy7z@harvard.edu",
  },
  {
    color: "#4cf88a",
    avatar: "https://robohash.org/autquisquia.png?size=50x50&set=set1",
    name: "Diana Benedito",
    university: "Institute of Teachers Education, Perlis",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "dbenedito80@usgs.gov",
  },
  {
    color: "#6f8b59",
    avatar: "https://robohash.org/namillumet.png?size=50x50&set=set1",
    name: "Gloria Le Batteur",
    university: "University of Northern Colorado",
    sentences: "Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "gle81@washingtonpost.com",
  },
  {
    color: "#028078",
    avatar:
      "https://robohash.org/numquamvelitvoluptatum.png?size=50x50&set=set1",
    name: "Viviyan Milligan",
    university: "Università Pontificia Salesiana",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "vmilligan82@hubpages.com",
  },
  {
    color: "#3372ba",
    avatar:
      "https://robohash.org/aliquamvoluptatemiure.png?size=50x50&set=set1",
    name: "Jemimah Walicki",
    university: "Instituto Tecnológico de Buenos Aires",
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "jwalicki83@earthlink.net",
  },
  {
    color: "#81dba5",
    avatar: "https://robohash.org/nondoloremenim.png?size=50x50&set=set1",
    name: "Jarib Minett",
    university: "Universidad de Málaga",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "jminett84@bizjournals.com",
  },
  {
    color: "#2a608f",
    avatar:
      "https://robohash.org/adipiscivoluptatemnecessitatibus.png?size=50x50&set=set1",
    name: "Stormie Rowthorne",
    university: "Kiev School Of Economics",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "srowthorne85@deliciousdays.com",
  },
  {
    color: "#f98674",
    avatar: "https://robohash.org/ipsaestnam.png?size=50x50&set=set1",
    name: "Berty Coit",
    university: "Nanjing Union Theological Seminary",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "bcoit86@symantec.com",
  },
  {
    color: "#0d177c",
    avatar: "https://robohash.org/omnisetqui.png?size=50x50&set=set1",
    name: "Krispin Saffran",
    university: "Pontificia Universidad Católica del Perú",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "ksaffran87@cbslocal.com",
  },
  {
    color: "#6c7db6",
    avatar: "https://robohash.org/officiisquiodit.png?size=50x50&set=set1",
    name: "Brianne Langhorne",
    university: "University of Food Technology",
    sentences: "Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "blanghorne88@army.mil",
  },
  {
    color: "#4de23d",
    avatar: "https://robohash.org/earumnatuseos.png?size=50x50&set=set1",
    name: "Cody Barwack",
    university: "Baku State University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "cbarwack89@nih.gov",
  },
  {
    color: "#0d5200",
    avatar: "https://robohash.org/ipsumillumearum.png?size=50x50&set=set1",
    name: "Corene Giacobazzi",
    university: "Banasthali University",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "cgiacobazzi8a@friendfeed.com",
  },
  {
    color: "#ba1ef4",
    avatar: "https://robohash.org/quiaadipiscisoluta.png?size=50x50&set=set1",
    name: "Elane Farrants",
    university: "State University of New York at Binghamton",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "efarrants8b@cnbc.com",
  },
  {
    color: "#8901fb",
    avatar: "https://robohash.org/abidenim.png?size=50x50&set=set1",
    name: "Cynthie Durgan",
    university: "Mahsa University College for Health and Medical Science",
    sentences: "Aenean sit amet justo.",
    email: "cdurgan8c@craigslist.org",
  },
  {
    color: "#b13ca4",
    avatar: "https://robohash.org/vitaesequiaut.png?size=50x50&set=set1",
    name: "Wynnie Horley",
    university: "Nippon Medical School",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "whorley8d@ow.ly",
  },
  {
    color: "#ed8afb",
    avatar: "https://robohash.org/errorestsimilique.png?size=50x50&set=set1",
    name: "Franklyn Manuele",
    university: "Sonoda Women's University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "fmanuele8e@ft.com",
  },
  {
    color: "#26775f",
    avatar: "https://robohash.org/eaasperioresvoluptas.png?size=50x50&set=set1",
    name: "Ebeneser Shotter",
    university: "Universidad EAFIT",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "eshotter8f@guardian.co.uk",
  },
  {
    color: "#453c3a",
    avatar: "https://robohash.org/cumnamhic.png?size=50x50&set=set1",
    name: "Drugi Dignon",
    university: "National Aviation Academy",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "ddignon8g@timesonline.co.uk",
  },
  {
    color: "#ffd851",
    avatar: "https://robohash.org/sintomnissint.png?size=50x50&set=set1",
    name: "Sybyl Ferne",
    university: "University of Silvaner",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "sferne8h@histats.com",
  },
  {
    color: "#69da49",
    avatar:
      "https://robohash.org/repellendusomnislaborum.png?size=50x50&set=set1",
    name: "Sal Brinklow",
    university: "National University of Science and Technology",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "sbrinklow8i@sun.com",
  },
  {
    color: "#a3884a",
    avatar: "https://robohash.org/inventorenesciuntaut.png?size=50x50&set=set1",
    name: "Hilliard Bhar",
    university: "Dares Salaam Institute of Technology",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "hbhar8j@discovery.com",
  },
  {
    color: "#531b1a",
    avatar: "https://robohash.org/mollitiasequinam.png?size=50x50&set=set1",
    name: "Nicky Langworthy",
    university: "Seton Hill College",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "nlangworthy8k@reuters.com",
  },
  {
    color: "#f720f0",
    avatar: "https://robohash.org/etillumet.png?size=50x50&set=set1",
    name: "Ly Gillett",
    university: "Huazhong Agricultural University",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "lgillett8l@chron.com",
  },
  {
    color: "#11033d",
    avatar: "https://robohash.org/assumendaautearum.png?size=50x50&set=set1",
    name: "Janeta Francescozzi",
    university: "Universität Leipzig",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "jfrancescozzi8m@seesaa.net",
  },
  {
    color: "#cbdb75",
    avatar: "https://robohash.org/itaqueutaut.png?size=50x50&set=set1",
    name: "Gregorius Nalder",
    university: "University of Wisconsin - Milwaukee",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "gnalder8n@goodreads.com",
  },
  {
    color: "#9610e3",
    avatar:
      "https://robohash.org/doloribusoptioreiciendis.png?size=50x50&set=set1",
    name: "Zenia Rogers",
    university: "Pontificio Istituto Orientale",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "zrogers8o@tripod.com",
  },
  {
    color: "#3839f4",
    avatar: "https://robohash.org/rerumnisiomnis.png?size=50x50&set=set1",
    name: "Pattie Rocco",
    university: "California College San Diego",
    sentences: "In hac habitasse platea dictumst.",
    email: "procco8p@amazon.de",
  },
  {
    color: "#47ac4a",
    avatar: "https://robohash.org/inventoreestin.png?size=50x50&set=set1",
    name: "Alphonso Rittmeyer",
    university: "Rajasthan Agricultural University, Bikaner",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "arittmeyer8q@dion.ne.jp",
  },
  {
    color: "#a58f20",
    avatar: "https://robohash.org/sintdictacommodi.png?size=50x50&set=set1",
    name: "Esta Halsey",
    university: "Park College",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "ehalsey8r@unc.edu",
  },
  {
    color: "#aa4b5f",
    avatar:
      "https://robohash.org/maximetemporevoluptas.png?size=50x50&set=set1",
    name: "Greer Markwell",
    university: "European University",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "gmarkwell8s@simplemachines.org",
  },
  {
    color: "#1beb55",
    avatar: "https://robohash.org/dolorumillooptio.png?size=50x50&set=set1",
    name: "Callie Grennan",
    university: "Yanbian University",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "cgrennan8t@photobucket.com",
  },
  {
    color: "#13df77",
    avatar:
      "https://robohash.org/rationereiciendismaxime.png?size=50x50&set=set1",
    name: "Tymothy Murrow",
    university: "Hamline University",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "tmurrow8u@ow.ly",
  },
  {
    color: "#886b7a",
    avatar: "https://robohash.org/velitdictadelectus.png?size=50x50&set=set1",
    name: "Madeline Ivanyushin",
    university: "Kuban State University",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "mivanyushin8v@drupal.org",
  },
  {
    color: "#d0cf61",
    avatar:
      "https://robohash.org/molestiasfugittempore.png?size=50x50&set=set1",
    name: "Pebrook Ennor",
    university: "Bauhaus Universität Weimar",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "pennor8w@google.com.au",
  },
  {
    color: "#264002",
    avatar: "https://robohash.org/delenitiveniamsed.png?size=50x50&set=set1",
    name: "Holli Bashford",
    university: "Universidad Adventista de Colombia",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "hbashford8x@de.vu",
  },
  {
    color: "#4b740b",
    avatar: "https://robohash.org/autdelectusanimi.png?size=50x50&set=set1",
    name: "Sheba Denyer",
    university: "Hamdan Bin Mohammed e-University",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    email: "sdenyer8y@tumblr.com",
  },
  {
    color: "#30ed6f",
    avatar:
      "https://robohash.org/accusantiumvitaevoluptate.png?size=50x50&set=set1",
    name: "Justino Imore",
    university: "Lancaster University Ghana",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "jimore8z@biblegateway.com",
  },
  {
    color: "#49febc",
    avatar:
      "https://robohash.org/necessitatibusvoluptatumvoluptas.png?size=50x50&set=set1",
    name: "Pail Pehrsson",
    university: "Universidade Federal de Roraima",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "ppehrsson90@usatoday.com",
  },
  {
    color: "#6176a7",
    avatar: "https://robohash.org/atmaioresquasi.png?size=50x50&set=set1",
    name: "Malina Cabane",
    university: "Floret Global University",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "mcabane91@china.com.cn",
  },
  {
    color: "#cdfd1d",
    avatar: "https://robohash.org/quoenimnihil.png?size=50x50&set=set1",
    name: "Farlay Whyborne",
    university: "Mahatma Gandhi University Meghalaya ",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "fwhyborne92@trellian.com",
  },
  {
    color: "#f73be5",
    avatar: "https://robohash.org/eumquodvoluptas.png?size=50x50&set=set1",
    name: "Shela Balffye",
    university: "University of Wales",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "sbalffye93@rakuten.co.jp",
  },
  {
    color: "#e44d56",
    avatar:
      "https://robohash.org/officiisconsequaturiusto.png?size=50x50&set=set1",
    name: "Mariel Sawford",
    university: "Semera University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "msawford94@163.com",
  },
  {
    color: "#fb9240",
    avatar: "https://robohash.org/fugaveritatissed.png?size=50x50&set=set1",
    name: "Diena Hoston",
    university: "Chongqing University of Science and Technology ",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "dhoston95@clickbank.net",
  },
  {
    color: "#7968ab",
    avatar: "https://robohash.org/exconsequaturdolore.png?size=50x50&set=set1",
    name: "Veronike Corkel",
    university: "University of Utah",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "vcorkel96@howstuffworks.com",
  },
  {
    color: "#a23b05",
    avatar:
      "https://robohash.org/architectominusplaceat.png?size=50x50&set=set1",
    name: "Jacinthe Dunphy",
    university: "Universidad Tecnológica San Antonio de Machala",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "jdunphy97@seesaa.net",
  },
  {
    color: "#a78e4f",
    avatar: "https://robohash.org/oditquosnihil.png?size=50x50&set=set1",
    name: "Arlena Snookes",
    university: "Stephen F. Austin State University",
    sentences: "Integer non velit.",
    email: "asnookes98@seesaa.net",
  },
  {
    color: "#4eaf2d",
    avatar: "https://robohash.org/quamearumofficiis.png?size=50x50&set=set1",
    name: "Adriana Boulger",
    university: "Universidad del Desarrollo",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "aboulger99@cbsnews.com",
  },
  {
    color: "#886ab7",
    avatar: "https://robohash.org/quiasuntsint.png?size=50x50&set=set1",
    name: "Raphaela Cloutt",
    university: "Chubu Gakuin University & Chubu Women's College",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "rcloutt9a@answers.com",
  },
  {
    color: "#ff9a59",
    avatar: "https://robohash.org/autvoluptatumsed.png?size=50x50&set=set1",
    name: "Carmelle Paulitschke",
    university: "William Woods University",
    sentences: "Maecenas ut massa quis augue luctus tincidunt.",
    email: "cpaulitschke9b@un.org",
  },
  {
    color: "#74e4bf",
    avatar:
      "https://robohash.org/velitquasiexercitationem.png?size=50x50&set=set1",
    name: "Rockwell Priter",
    university: "Kyoto Seika University",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "rpriter9c@discovery.com",
  },
  {
    color: "#e896de",
    avatar:
      "https://robohash.org/perferendiscorporissimilique.png?size=50x50&set=set1",
    name: "Waldon Penwarden",
    university: "Fern-Fachhochschule Hamburg",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "wpenwarden9d@infoseek.co.jp",
  },
  {
    color: "#77cf60",
    avatar:
      "https://robohash.org/dolorumvoluptatemexplicabo.png?size=50x50&set=set1",
    name: "Dottie McLenaghan",
    university: "Fachhochschule Osnabrück",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "dmclenaghan9e@ucla.edu",
  },
  {
    color: "#6f01d0",
    avatar: "https://robohash.org/aperiamdoloremqueaut.png?size=50x50&set=set1",
    name: "Evonne Durston",
    university: "North Dakota State University",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "edurston9f@elpais.com",
  },
  {
    color: "#7d7484",
    avatar: "https://robohash.org/abnonsunt.png?size=50x50&set=set1",
    name: "Clovis Amsden",
    university: "Ho Chi Minh City University of Transport",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "camsden9g@si.edu",
  },
  {
    color: "#3ece83",
    avatar: "https://robohash.org/solutasapientehic.png?size=50x50&set=set1",
    name: "Cicely Rosso",
    university: "Universitas Negeri Surabaya",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "crosso9h@github.com",
  },
  {
    color: "#0b5076",
    avatar: "https://robohash.org/nostrumtotamfuga.png?size=50x50&set=set1",
    name: "George Longmate",
    university: "Westminster College of Salt Lake City",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "glongmate9i@diigo.com",
  },
  {
    color: "#3388a1",
    avatar:
      "https://robohash.org/voluptaseligendireiciendis.png?size=50x50&set=set1",
    name: "Kristo Gerring",
    university: "Universidad Dominico-Americana",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "kgerring9j@bing.com",
  },
  {
    color: "#ee6ca9",
    avatar: "https://robohash.org/minimaquasifacilis.png?size=50x50&set=set1",
    name: "Jsandye Alejandro",
    university: "Milwaukee School of Engineering",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "jalejandro9k@usa.gov",
  },
  {
    color: "#0894b5",
    avatar:
      "https://robohash.org/repellendusreiciendisducimus.png?size=50x50&set=set1",
    name: "Ninetta Eudall",
    university: "Tokyo Women's Medial College",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "neudall9l@issuu.com",
  },
  {
    color: "#778be3",
    avatar: "https://robohash.org/sintcorporisea.png?size=50x50&set=set1",
    name: "Eileen Descroix",
    university: "John Wesley College",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "edescroix9m@japanpost.jp",
  },
  {
    color: "#d061fb",
    avatar: "https://robohash.org/sintsapientedebitis.png?size=50x50&set=set1",
    name: "Cathee Bateman",
    university: 'Veliko Turnovo University "Cyril and Methodius"',
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "cbateman9n@theatlantic.com",
  },
  {
    color: "#1a46c9",
    avatar: "https://robohash.org/nobisadipiscisint.png?size=50x50&set=set1",
    name: "Ivor Moine",
    university: "Universidad Panamericana",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "imoine9o@t.co",
  },
  {
    color: "#e2b64d",
    avatar: "https://robohash.org/autconsequunturcum.png?size=50x50&set=set1",
    name: "Sondra Deam",
    university: "University of Transport and Communications",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "sdeam9p@whitehouse.gov",
  },
  {
    color: "#dd2243",
    avatar: "https://robohash.org/autquaeratneque.png?size=50x50&set=set1",
    name: "Emmett Absolom",
    university: "Islamic Azad University, Varamin",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "eabsolom9q@ning.com",
  },
  {
    color: "#c8e27b",
    avatar: "https://robohash.org/optioadipisciea.png?size=50x50&set=set1",
    name: "Kirk Slite",
    university: "Universitas Methodist Indonesia",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "kslite9r@storify.com",
  },
  {
    color: "#a91029",
    avatar: "https://robohash.org/providenteumamet.png?size=50x50&set=set1",
    name: "Edin Holyland",
    university: "University of Kentucky",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "eholyland9s@bluehost.com",
  },
  {
    color: "#75574c",
    avatar: "https://robohash.org/optioveritatisipsam.png?size=50x50&set=set1",
    name: "Horatius Corkhill",
    university: "Lynchburg College",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "hcorkhill9t@oakley.com",
  },
  {
    color: "#4a71df",
    avatar: "https://robohash.org/quiautemnostrum.png?size=50x50&set=set1",
    name: "Alida Morehall",
    university: "Laurus Technical Institute",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "amorehall9u@csmonitor.com",
  },
  {
    color: "#cbf334",
    avatar: "https://robohash.org/estfacilisporro.png?size=50x50&set=set1",
    name: "Tann Eagell",
    university: "Universidad Autónoma de Chihuahua",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "teagell9v@irs.gov",
  },
  {
    color: "#b99708",
    avatar: "https://robohash.org/underepellatautem.png?size=50x50&set=set1",
    name: "Julian Piken",
    university: "St. Anselm College",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "jpiken9w@census.gov",
  },
  {
    color: "#349252",
    avatar: "https://robohash.org/rerummaximeaperiam.png?size=50x50&set=set1",
    name: "Agneta Gasking",
    university: "Lakeview College of Nursing",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "agasking9x@barnesandnoble.com",
  },
  {
    color: "#bedb83",
    avatar:
      "https://robohash.org/reiciendisutmolestiae.png?size=50x50&set=set1",
    name: "Alford Tyrie",
    university: "University of Tasmania",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "atyrie9y@nih.gov",
  },
  {
    color: "#acb0a9",
    avatar: "https://robohash.org/mollitiateneturad.png?size=50x50&set=set1",
    name: "Kienan Emloch",
    university: "Dubai Medical College for Girls",
    sentences: "Proin eu mi.",
    email: "kemloch9z@adobe.com",
  },
  {
    color: "#fe9cc6",
    avatar: "https://robohash.org/beataequibusdamearum.png?size=50x50&set=set1",
    name: "Whit Griffitts",
    university: "Ecole Nationale de l'Aviation Civile",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "wgriffittsa0@shinystat.com",
  },
  {
    color: "#e0253d",
    avatar: "https://robohash.org/providenteosut.png?size=50x50&set=set1",
    name: "Katrinka Bouldstridge",
    university: "Brandeis University",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "kbouldstridgea1@nps.gov",
  },
  {
    color: "#644074",
    avatar: "https://robohash.org/undequiquos.png?size=50x50&set=set1",
    name: "Reuven Roscoe",
    university: "Norfolk State University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "rroscoea2@harvard.edu",
  },
  {
    color: "#a21de4",
    avatar: "https://robohash.org/veritatisfacerequi.png?size=50x50&set=set1",
    name: "Augustus Oleszczak",
    university: "ITT Technical Institute West Covina",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "aoleszczaka3@amazon.de",
  },
  {
    color: "#0d6014",
    avatar:
      "https://robohash.org/laudantiumbeataesaepe.png?size=50x50&set=set1",
    name: "Lenci Avrahamian",
    university: "Wittenberg University",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "lavrahamiana4@dailymotion.com",
  },
  {
    color: "#95586e",
    avatar: "https://robohash.org/utinet.png?size=50x50&set=set1",
    name: "Ivie Epsly",
    university: "Saginaw Valley State University",
    sentences: "Suspendisse potenti.",
    email: "iepslya5@sciencedaily.com",
  },
  {
    color: "#4c97ec",
    avatar: "https://robohash.org/corporisteneturnatus.png?size=50x50&set=set1",
    name: "Woodrow Gossage",
    university: "Skadron College",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "wgossagea6@oaic.gov.au",
  },
  {
    color: "#84f508",
    avatar: "https://robohash.org/ullamlaborumtempora.png?size=50x50&set=set1",
    name: "Jillane Sankey",
    university: "Burjat State University",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "jsankeya7@technorati.com",
  },
  {
    color: "#c5e14b",
    avatar: "https://robohash.org/omnisrationeminima.png?size=50x50&set=set1",
    name: "Clemmie Donne",
    university: "Yorker International University",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "cdonnea8@fotki.com",
  },
  {
    color: "#532219",
    avatar:
      "https://robohash.org/earuminciduntcorporis.png?size=50x50&set=set1",
    name: "Madelin Young",
    university: "Universiti Sultan Zainal Abidin",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "myounga9@sphinn.com",
  },
  {
    color: "#f9ebe2",
    avatar: "https://robohash.org/officiasedveniam.png?size=50x50&set=set1",
    name: "Piggy Kendal",
    university: "Carroll College Waukesha",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "pkendalaa@lycos.com",
  },
  {
    color: "#dca97e",
    avatar: "https://robohash.org/autlaborumvoluptatum.png?size=50x50&set=set1",
    name: "Stefanie Annear",
    university: "Universidad Abierta Interamericana",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "sannearab@un.org",
  },
  {
    color: "#4b7b14",
    avatar: "https://robohash.org/voluptatemutfugiat.png?size=50x50&set=set1",
    name: "Edeline Chagg",
    university: "Universidade Tiradentes",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "echaggac@vkontakte.ru",
  },
  {
    color: "#0f2e2b",
    avatar:
      "https://robohash.org/asperioreslaboreperspiciatis.png?size=50x50&set=set1",
    name: "Robinetta Iston",
    university: "Webb Institute",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "ristonad@theglobeandmail.com",
  },
  {
    color: "#ffd561",
    avatar:
      "https://robohash.org/voluptatemmagnamquisquam.png?size=50x50&set=set1",
    name: "Ricoriki Boame",
    university: "Pennsylvania State University - Lehigh Valley",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "rboameae@yellowpages.com",
  },
  {
    color: "#70dfea",
    avatar:
      "https://robohash.org/eumsapienteperferendis.png?size=50x50&set=set1",
    name: "Ardelis McCuffie",
    university: "Gansu University of Technology",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "amccuffieaf@qq.com",
  },
  {
    color: "#98e460",
    avatar: "https://robohash.org/repellatquoset.png?size=50x50&set=set1",
    name: "David Coye",
    university: "Rust College",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "dcoyeag@hp.com",
  },
  {
    color: "#6541fe",
    avatar: "https://robohash.org/eumtemporein.png?size=50x50&set=set1",
    name: "Dolli Yurlov",
    university: "Islamic Azad University, Central Tehran Branch",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "dyurlovah@amazon.com",
  },
  {
    color: "#582826",
    avatar:
      "https://robohash.org/modidoloremdignissimos.png?size=50x50&set=set1",
    name: "Caralie Amorts",
    university: "Danville Area Community College",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "camortsai@yandex.ru",
  },
  {
    color: "#4e79ae",
    avatar: "https://robohash.org/laboriosamipsumalias.png?size=50x50&set=set1",
    name: "Son Bodycomb",
    university: "Vlerick Leuven Gent Management School",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "sbodycombaj@twitpic.com",
  },
  {
    color: "#45f834",
    avatar: "https://robohash.org/sititaqueoptio.png?size=50x50&set=set1",
    name: "Gregor Aymeric",
    university: "Scripps College",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "gaymericak@zimbio.com",
  },
  {
    color: "#202af3",
    avatar: "https://robohash.org/rerumiuredelectus.png?size=50x50&set=set1",
    name: "Huntington O'Corrane",
    university: "Women's University in Africa",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "hocorraneal@desdev.cn",
  },
  {
    color: "#41eca4",
    avatar: "https://robohash.org/eosvoluptatemdolore.png?size=50x50&set=set1",
    name: "Gradeigh Ghiraldi",
    university: "Universidad Nacional Hermilio Valdizan",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "gghiraldiam@odnoklassniki.ru",
  },
  {
    color: "#2c8a33",
    avatar:
      "https://robohash.org/voluptatibusidasperiores.png?size=50x50&set=set1",
    name: "Eal Dooly",
    university: "Iwate University",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "edoolyan@twitpic.com",
  },
  {
    color: "#9ae6f8",
    avatar: "https://robohash.org/inventoreducimusea.png?size=50x50&set=set1",
    name: "Maitilde Cunradi",
    university: "Sylhet Engineering College",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "mcunradiao@godaddy.com",
  },
  {
    color: "#ca414e",
    avatar: "https://robohash.org/praesentiumquiaut.png?size=50x50&set=set1",
    name: "Lowrance Hayman",
    university: "Southeastern University",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "lhaymanap@statcounter.com",
  },
  {
    color: "#c76904",
    avatar: "https://robohash.org/consequaturdolorsunt.png?size=50x50&set=set1",
    name: "Gordan Josselson",
    university: "Universidad Ricardo Palma",
    sentences:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    email: "gjosselsonaq@github.io",
  },
  {
    color: "#dacdee",
    avatar: "https://robohash.org/dictaillorerum.png?size=50x50&set=set1",
    name: "Faunie Larman",
    university: "Liverpool John Moores University",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "flarmanar@prlog.org",
  },
  {
    color: "#0776e6",
    avatar: "https://robohash.org/sedprovidentquia.png?size=50x50&set=set1",
    name: "Ignaz Woollons",
    university: "Help University College",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "iwoollonsas@tinypic.com",
  },
  {
    color: "#45f5f4",
    avatar: "https://robohash.org/liberosequiratione.png?size=50x50&set=set1",
    name: "Ninnette Duigan",
    university: "St. Andrews Presbyterian College",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "nduiganat@cafepress.com",
  },
  {
    color: "#75f43b",
    avatar: "https://robohash.org/oditnemodolor.png?size=50x50&set=set1",
    name: "Alanson Klais",
    university:
      "Universidad de la Fraternidad de Agrupaciones Santo Tomas de Aquino (FASTA)",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "aklaisau@howstuffworks.com",
  },
  {
    color: "#2ec681",
    avatar: "https://robohash.org/molestiaesintin.png?size=50x50&set=set1",
    name: "Shermie Garrick",
    university: "Franklin College",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "sgarrickav@bloomberg.com",
  },
  {
    color: "#94186b",
    avatar:
      "https://robohash.org/etconsequuntureveniet.png?size=50x50&set=set1",
    name: "Morry Brandolini",
    university: "Warsaw School of Economics",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "mbrandoliniaw@gravatar.com",
  },
  {
    color: "#031e74",
    avatar: "https://robohash.org/insapientequidem.png?size=50x50&set=set1",
    name: "Jasmine Biddlecombe",
    university: "Valparaiso University",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "jbiddlecombeax@wiley.com",
  },
  {
    color: "#1e6110",
    avatar:
      "https://robohash.org/illodoloremqueaccusamus.png?size=50x50&set=set1",
    name: "Helsa Spurret",
    university: "China USA Business University",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "hspurretay@home.pl",
  },
  {
    color: "#72de1d",
    avatar:
      "https://robohash.org/fugamaximeconsequuntur.png?size=50x50&set=set1",
    name: "Philly Trevaskiss",
    university: "East China University of Science and Technology",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "ptrevaskissaz@cbc.ca",
  },
  {
    color: "#0313fc",
    avatar: "https://robohash.org/deseruntminusmaiores.png?size=50x50&set=set1",
    name: "Darell Gomm",
    university: "Universidad Autónoma Metropolitana - Azcapotzalco",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "dgommb0@utexas.edu",
  },
  {
    color: "#0ab761",
    avatar: "https://robohash.org/quiremvel.png?size=50x50&set=set1",
    name: "Laurie Byram",
    university: "Fayetteville State University",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "lbyramb1@paypal.com",
  },
  {
    color: "#62f597",
    avatar:
      "https://robohash.org/necessitatibusexpeditaconsequatur.png?size=50x50&set=set1",
    name: "Katine Perigo",
    university: "COMSATS Institute of Information Technology, Wah",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "kperigob2@foxnews.com",
  },
  {
    color: "#0316b2",
    avatar: "https://robohash.org/velculpaconsequuntur.png?size=50x50&set=set1",
    name: "Minette Bewly",
    university: "Norton University",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "mbewlyb3@wiley.com",
  },
  {
    color: "#f27e52",
    avatar: "https://robohash.org/laboredoloreullam.png?size=50x50&set=set1",
    name: "Appolonia Roma",
    university: "Tobb Economics and Technology University",
    sentences: "Quisque porta volutpat erat.",
    email: "aromab4@homestead.com",
  },
  {
    color: "#0efddc",
    avatar: "https://robohash.org/doloribusquiavitae.png?size=50x50&set=set1",
    name: "Christyna Lornsen",
    university: "Universidad Abierta Interactiva",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "clornsenb5@independent.co.uk",
  },
  {
    color: "#913511",
    avatar: "https://robohash.org/errornonvoluptas.png?size=50x50&set=set1",
    name: "York Massimi",
    university: "Nuclear Institute for Agriculture and Biology (NIAB)",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    email: "ymassimib6@geocities.com",
  },
  {
    color: "#c9ec23",
    avatar: "https://robohash.org/nequenostrumpossimus.png?size=50x50&set=set1",
    name: "Lenka Bowle",
    university: "Université de Liège",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "lbowleb7@mit.edu",
  },
  {
    color: "#c31c8b",
    avatar: "https://robohash.org/veniamaperiamfacere.png?size=50x50&set=set1",
    name: "Katy Braidley",
    university: "Vennard College",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "kbraidleyb8@howstuffworks.com",
  },
  {
    color: "#49cfc1",
    avatar: "https://robohash.org/dictaetcum.png?size=50x50&set=set1",
    name: "Jermaine Alesi",
    university: "Ashland University",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "jalesib9@github.com",
  },
  {
    color: "#6d9234",
    avatar: "https://robohash.org/aperiametenim.png?size=50x50&set=set1",
    name: "Abey Noor",
    university: "Asahikawa Medical College",
    sentences: "Morbi non lectus.",
    email: "anoorba@yahoo.com",
  },
  {
    color: "#9de887",
    avatar:
      "https://robohash.org/voluptatelaborumimpedit.png?size=50x50&set=set1",
    name: "Pete Phippin",
    university: "Sankei University",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "pphippinbb@parallels.com",
  },
  {
    color: "#34a428",
    avatar: "https://robohash.org/doloresofficiissed.png?size=50x50&set=set1",
    name: "Tamarah Woloschin",
    university: "Europa Fachhochschule Fresenius",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "twoloschinbc@homestead.com",
  },
  {
    color: "#6a88f4",
    avatar: "https://robohash.org/sedcorruptiex.png?size=50x50&set=set1",
    name: "Kerianne Hylton",
    university: "St. Xavier University",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "khyltonbd@myspace.com",
  },
  {
    color: "#d6dfac",
    avatar:
      "https://robohash.org/nihilarchitectodebitis.png?size=50x50&set=set1",
    name: "Philipa Spencer",
    university: "University of Baghdad",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "pspencerbe@issuu.com",
  },
  {
    color: "#21ce99",
    avatar: "https://robohash.org/autemdolorestempora.png?size=50x50&set=set1",
    name: "Jens Lace",
    university: "United States International University",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "jlacebf@salon.com",
  },
  {
    color: "#7b23be",
    avatar: "https://robohash.org/laudantiumharumquas.png?size=50x50&set=set1",
    name: "Kath Cruft",
    university: "Iasar University",
    sentences:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "kcruftbg@blogtalkradio.com",
  },
  {
    color: "#1becb4",
    avatar: "https://robohash.org/estdelectusad.png?size=50x50&set=set1",
    name: "Anstice MacColgan",
    university: "Shippensburg University of Pennsylvania",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "amaccolganbh@people.com.cn",
  },
  {
    color: "#5e0168",
    avatar: "https://robohash.org/estexpeditaest.png?size=50x50&set=set1",
    name: "Bernardine Jerzykiewicz",
    university: "University of Kabianga",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "bjerzykiewiczbi@nature.com",
  },
  {
    color: "#5aeb01",
    avatar:
      "https://robohash.org/quisaccusamusvoluptatem.png?size=50x50&set=set1",
    name: "Aurthur Attaway",
    university: "Mehrabyan Medical Institute and Medical College",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "aattawaybj@cloudflare.com",
  },
  {
    color: "#ad8ec1",
    avatar: "https://robohash.org/saepeautveniam.png?size=50x50&set=set1",
    name: "Shannah Hallett",
    university: "Eastern Michigan University",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "shallettbk@smugmug.com",
  },
  {
    color: "#514243",
    avatar: "https://robohash.org/temporedoloremnam.png?size=50x50&set=set1",
    name: "Ruth Hesser",
    university: "Lampang Vocational College   ",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "rhesserbl@gmpg.org",
  },
  {
    color: "#428b4b",
    avatar: "https://robohash.org/ipsumcorporisodit.png?size=50x50&set=set1",
    name: "Else Ashworth",
    university: "University of Wisconsin - Milwaukee",
    sentences: "Morbi quis tortor id nulla ultrices aliquet.",
    email: "eashworthbm@cargocollective.com",
  },
  {
    color: "#1170c4",
    avatar:
      "https://robohash.org/voluptasaccusamusmagnam.png?size=50x50&set=set1",
    name: "Sheena Steptow",
    university: "Case Western Reserve University",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "ssteptowbn@ustream.tv",
  },
  {
    color: "#1aaa39",
    avatar:
      "https://robohash.org/debitisconsequunturrecusandae.png?size=50x50&set=set1",
    name: "Ward Curmi",
    university: "University of Pittsburgh at Bradford",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "wcurmibo@ihg.com",
  },
  {
    color: "#995962",
    avatar:
      "https://robohash.org/autemrepudiandaesequi.png?size=50x50&set=set1",
    name: "Waly Brundall",
    university: "Anna University",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "wbrundallbp@noaa.gov",
  },
  {
    color: "#038910",
    avatar: "https://robohash.org/teneturdoloremquasi.png?size=50x50&set=set1",
    name: "Rianon Burt",
    university: "National American University, Roseville",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "rburtbq@jalbum.net",
  },
  {
    color: "#0ef13e",
    avatar:
      "https://robohash.org/adipiscinostrumsoluta.png?size=50x50&set=set1",
    name: "Worthy Wolfit",
    university: "Institut Teknologi Adhi Tama Surabaya",
    sentences: "Integer ac neque. Duis bibendum.",
    email: "wwolfitbr@wikispaces.com",
  },
  {
    color: "#b7ec0b",
    avatar: "https://robohash.org/nobisaperiamomnis.png?size=50x50&set=set1",
    name: "Rica Sealy",
    university: "Academy of Fine Arts",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "rsealybs@redcross.org",
  },
  {
    color: "#b8eb88",
    avatar: "https://robohash.org/odioundequi.png?size=50x50&set=set1",
    name: "Ashlin Dake",
    university: "Wayo Women's University",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "adakebt@facebook.com",
  },
  {
    color: "#1a4a27",
    avatar: "https://robohash.org/blanditiisquia.png?size=50x50&set=set1",
    name: "Odell Hayball",
    university: "Universidad Católica de Córdoba",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "ohayballbu@photobucket.com",
  },
  {
    color: "#4f5cd4",
    avatar: "https://robohash.org/quicupiditateab.png?size=50x50&set=set1",
    name: "Samantha Scholling",
    university: "Université Paris-Sorbonne (Paris IV)",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "sschollingbv@joomla.org",
  },
  {
    color: "#70adb9",
    avatar: "https://robohash.org/quiiureesse.png?size=50x50&set=set1",
    name: "Emylee Nudd",
    university: "Tohoku Fukushi University",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    email: "enuddbw@gizmodo.com",
  },
  {
    color: "#4acdca",
    avatar:
      "https://robohash.org/sequirepellatconsequatur.png?size=50x50&set=set1",
    name: "Jenelle Codrington",
    university: "University of Hawaii - West Oahu",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "jcodringtonbx@people.com.cn",
  },
  {
    color: "#01d9e4",
    avatar: "https://robohash.org/magnamevenietoptio.png?size=50x50&set=set1",
    name: "Elfie Carlisi",
    university: "Police Academy of Latvia",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "ecarlisiby@chron.com",
  },
  {
    color: "#5eb5a5",
    avatar: "https://robohash.org/placeatsequitotam.png?size=50x50&set=set1",
    name: "Jayson Fowley",
    university: "Reed College",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "jfowleybz@bizjournals.com",
  },
  {
    color: "#ecd198",
    avatar: "https://robohash.org/laboriosamoptioneque.png?size=50x50&set=set1",
    name: "Philipa Bode",
    university: "Bharath Institue Of Higher Education & Research",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "pbodec0@blogger.com",
  },
  {
    color: "#2ad2bf",
    avatar: "https://robohash.org/natusbeataesequi.png?size=50x50&set=set1",
    name: "Aurilia McSperron",
    university: "Schiller International University, London",
    sentences:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "amcsperronc1@twitpic.com",
  },
  {
    color: "#99c913",
    avatar:
      "https://robohash.org/molestiaeperferendistempore.png?size=50x50&set=set1",
    name: "Gilburt Raddish",
    university: "University of Mindanao",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "graddishc2@cam.ac.uk",
  },
  {
    color: "#e8560a",
    avatar: "https://robohash.org/animiarchitectoaut.png?size=50x50&set=set1",
    name: "Cash Ettritch",
    university: "Karlshochschule International University",
    sentences: "Donec quis orci eget orci vehicula condimentum.",
    email: "cettritchc3@xing.com",
  },
  {
    color: "#f34f41",
    avatar: "https://robohash.org/quaehicvoluptatem.png?size=50x50&set=set1",
    name: "Mag Lamswood",
    university: "Europäische Betriebswirtschafts-Akademie",
    sentences:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "mlamswoodc4@google.com.hk",
  },
  {
    color: "#822f54",
    avatar:
      "https://robohash.org/architectovelassumenda.png?size=50x50&set=set1",
    name: "Bert Hardy-Piggin",
    university: "Ivanovo State Academy of Medicine",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "bhardypigginc5@feedburner.com",
  },
  {
    color: "#3c0716",
    avatar: "https://robohash.org/dictaatqueid.png?size=50x50&set=set1",
    name: "Philippe Fores",
    university: "Georgia School of Professional Psychology",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "pforesc6@simplemachines.org",
  },
  {
    color: "#d6d835",
    avatar:
      "https://robohash.org/maioressitconsequatur.png?size=50x50&set=set1",
    name: "Charmian Yurin",
    university: "Bu Ali Sina University",
    sentences: "Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "cyurinc7@ezinearticles.com",
  },
  {
    color: "#cc99fa",
    avatar: "https://robohash.org/sunteaitaque.png?size=50x50&set=set1",
    name: "Jozef Iacabucci",
    university: "Universidad de Cuenca",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    email: "jiacabuccic8@usgs.gov",
  },
  {
    color: "#a80f61",
    avatar:
      "https://robohash.org/recusandaedignissimosdolore.png?size=50x50&set=set1",
    name: "Yurik Dearness",
    university: "Politeknik Negeri Sambas",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "ydearnessc9@altervista.org",
  },
  {
    color: "#0888f4",
    avatar: "https://robohash.org/utconsequaturquod.png?size=50x50&set=set1",
    name: "Brien McKilroe",
    university: "Chittagong University of Engineering and Technology",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "bmckilroeca@phpbb.com",
  },
  {
    color: "#b717ae",
    avatar: "https://robohash.org/veroestquos.png?size=50x50&set=set1",
    name: "Nanci Grunguer",
    university: "Knowledge International University",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "ngrunguercb@mit.edu",
  },
  {
    color: "#5bdd06",
    avatar: "https://robohash.org/idetqui.png?size=50x50&set=set1",
    name: "Idelle While",
    university: "Wright Institute",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "iwhilecc@flickr.com",
  },
  {
    color: "#cccf8d",
    avatar: "https://robohash.org/autessevoluptatem.png?size=50x50&set=set1",
    name: "Harmon Barkaway",
    university: "DeVry Institute of Technology, Irving",
    sentences:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "hbarkawaycd@webmd.com",
  },
  {
    color: "#f4dfaa",
    avatar: "https://robohash.org/suscipitatqueporro.png?size=50x50&set=set1",
    name: "Antonina Stannion",
    university: "George Washington University",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    email: "astannionce@ucoz.com",
  },
  {
    color: "#32039f",
    avatar: "https://robohash.org/etrerumvitae.png?size=50x50&set=set1",
    name: "Lyle Kilius",
    university: "Tarim University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "lkiliuscf@dropbox.com",
  },
  {
    color: "#c4af99",
    avatar: "https://robohash.org/enimtotamab.png?size=50x50&set=set1",
    name: "Peta Cornew",
    university: "Ueno Gakuen College",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "pcornewcg@mlb.com",
  },
  {
    color: "#eed959",
    avatar: "https://robohash.org/autdolorelaboriosam.png?size=50x50&set=set1",
    name: "Joceline Vickerstaff",
    university: "Aleksander Gieysztor School of Humanities in Pultusk",
    sentences: "Nullam varius. Nulla facilisi.",
    email: "jvickerstaffch@thetimes.co.uk",
  },
  {
    color: "#7b321e",
    avatar: "https://robohash.org/voluptasquasibeatae.png?size=50x50&set=set1",
    name: "Georgie Ellin",
    university: "Université Hassan II - Aïn Chock",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "gellinci@tamu.edu",
  },
  {
    color: "#65b932",
    avatar: "https://robohash.org/etvoluptasarchitecto.png?size=50x50&set=set1",
    name: "Kelbee Kingswold",
    university: "Payame Noor University",
    sentences: "Quisque porta volutpat erat.",
    email: "kkingswoldcj@creativecommons.org",
  },
  {
    color: "#45130f",
    avatar:
      "https://robohash.org/providentdoloribusaccusamus.png?size=50x50&set=set1",
    name: "Darby Frangleton",
    university: "Technical University of Denmark",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "dfrangletonck@tinypic.com",
  },
  {
    color: "#307088",
    avatar: "https://robohash.org/doloremutet.png?size=50x50&set=set1",
    name: "Aigneis Sandeford",
    university: "Islamic Azad University, Tabriz",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "asandefordcl@diigo.com",
  },
  {
    color: "#4a0d30",
    avatar: "https://robohash.org/solutanumquameius.png?size=50x50&set=set1",
    name: "Stillman Brassington",
    university: "National Taipei University",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "sbrassingtoncm@networkadvertising.org",
  },
  {
    color: "#a7b2a7",
    avatar: "https://robohash.org/velitquiab.png?size=50x50&set=set1",
    name: "Baily Cawthron",
    university: "St. Xavier University",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "bcawthroncn@barnesandnoble.com",
  },
  {
    color: "#3c9a56",
    avatar: "https://robohash.org/fugasitcumque.png?size=50x50&set=set1",
    name: "Siusan Bevington",
    university: "Technical University of Cluj-Napoca",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "sbevingtonco@imageshack.us",
  },
  {
    color: "#6bd366",
    avatar: "https://robohash.org/recusandaedoloremex.png?size=50x50&set=set1",
    name: "Orazio Sarjeant",
    university: "Fushun Petroleum University",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "osarjeantcp@hugedomains.com",
  },
  {
    color: "#cc7a6f",
    avatar: "https://robohash.org/veniamdoloreanimi.png?size=50x50&set=set1",
    name: "Ryun Fodden",
    university: "National Taipei University of Technology",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "rfoddencq@businessweek.com",
  },
  {
    color: "#b520a6",
    avatar: "https://robohash.org/idsintomnis.png?size=50x50&set=set1",
    name: "Court Mandrey",
    university: "Chuka University",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "cmandreycr@house.gov",
  },
  {
    color: "#65bb45",
    avatar: "https://robohash.org/consecteturetfugit.png?size=50x50&set=set1",
    name: "Horten Cresar",
    university: "Rissho University",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "hcresarcs@freewebs.com",
  },
  {
    color: "#e63570",
    avatar: "https://robohash.org/estidet.png?size=50x50&set=set1",
    name: "Sigmund Lief",
    university: "Chung-Ang University",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    email: "sliefct@wiley.com",
  },
  {
    color: "#ffe0bb",
    avatar: "https://robohash.org/debitisdeseruntatque.png?size=50x50&set=set1",
    name: "Bernardine Porter",
    university: "Northwestern College St. Paul",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "bportercu@state.tx.us",
  },
  {
    color: "#77c689",
    avatar: "https://robohash.org/quienimnobis.png?size=50x50&set=set1",
    name: "Brody Haydn",
    university: "Darul Naim College of Technology",
    sentences:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "bhaydncv@g.co",
  },
  {
    color: "#8a2334",
    avatar:
      "https://robohash.org/deseruntquiavoluptatem.png?size=50x50&set=set1",
    name: "Chiquia Simao",
    university: "Kwara State Polytecnic",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "csimaocw@google.com.hk",
  },
  {
    color: "#7d6118",
    avatar: "https://robohash.org/facereestet.png?size=50x50&set=set1",
    name: "Sergio Kaley",
    university: "Technical University of Denmark",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "skaleycx@arstechnica.com",
  },
  {
    color: "#9de299",
    avatar: "https://robohash.org/illumestfuga.png?size=50x50&set=set1",
    name: "Marjorie Leechman",
    university: "RKDF University",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "mleechmancy@naver.com",
  },
  {
    color: "#1d293f",
    avatar: "https://robohash.org/dignissimossolutaet.png?size=50x50&set=set1",
    name: "Cinderella Pfiffer",
    university: "Universidad Gabriela Mistral",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "cpfiffercz@indiegogo.com",
  },
  {
    color: "#b8b35c",
    avatar: "https://robohash.org/itaquealiquamet.png?size=50x50&set=set1",
    name: "Pearce Matusson",
    university: "China Pharmaceutical University Nanjing",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "pmatussond0@prlog.org",
  },
  {
    color: "#0f1571",
    avatar: "https://robohash.org/etautsapiente.png?size=50x50&set=set1",
    name: "Brigitte Cocklie",
    university: "Newports Institute of Communication & Economics",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "bcocklied1@simplemachines.org",
  },
  {
    color: "#37d66d",
    avatar: "https://robohash.org/dignissimosculpased.png?size=50x50&set=set1",
    name: "Anna Wrought",
    university: "Loyola Marymount University",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    email: "awroughtd2@marriott.com",
  },
  {
    color: "#2db117",
    avatar: "https://robohash.org/earumverosint.png?size=50x50&set=set1",
    name: "Cory Basire",
    university: "Alaska Pacific University",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "cbasired3@netvibes.com",
  },
  {
    color: "#d6aec4",
    avatar: "https://robohash.org/ullaminmollitia.png?size=50x50&set=set1",
    name: "Helsa Cristol",
    university: "Islamic Azad University, Arak",
    sentences: "Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "hcristold4@multiply.com",
  },
  {
    color: "#6f7f82",
    avatar: "https://robohash.org/facereeiusmaiores.png?size=50x50&set=set1",
    name: "Babette Glazebrook",
    university: "University Marien Ngouabi Brazzaville",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "bglazebrookd5@free.fr",
  },
  {
    color: "#2cc51c",
    avatar: "https://robohash.org/aspernaturaniminulla.png?size=50x50&set=set1",
    name: "Gaile Ezzy",
    university: "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "gezzyd6@thetimes.co.uk",
  },
  {
    color: "#5de16a",
    avatar:
      "https://robohash.org/distinctionihilblanditiis.png?size=50x50&set=set1",
    name: "Durward Bahike",
    university: "Ulaanbaatar University",
    sentences: "Vivamus vel nulla eget eros elementum pellentesque.",
    email: "dbahiked7@wunderground.com",
  },
  {
    color: "#fea294",
    avatar: "https://robohash.org/sintveloptio.png?size=50x50&set=set1",
    name: "Anderea Minchi",
    university: 'Universidad Catolica "Redemptoris Mater"',
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "aminchid8@irs.gov",
  },
  {
    color: "#16064c",
    avatar: "https://robohash.org/enimsintreiciendis.png?size=50x50&set=set1",
    name: "Rea Taks",
    university: "Université de Franche-Comté",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "rtaksd9@theatlantic.com",
  },
  {
    color: "#c7b15b",
    avatar: "https://robohash.org/quaequisut.png?size=50x50&set=set1",
    name: "Karlens Bissett",
    university: "Private FernFachhochschule Darmstadt",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "kbissettda@cafepress.com",
  },
  {
    color: "#08d1c1",
    avatar: "https://robohash.org/velitdoloremfuga.png?size=50x50&set=set1",
    name: "Chaddy Schulze",
    university: "Kaunas Medical Academy",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "cschulzedb@scribd.com",
  },
  {
    color: "#20b181",
    avatar:
      "https://robohash.org/ipsumeligendiexercitationem.png?size=50x50&set=set1",
    name: "Avrit Handscombe",
    university: "Tashkent Pharmaceutical Institute",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "ahandscombedc@alibaba.com",
  },
  {
    color: "#6b5061",
    avatar:
      "https://robohash.org/consecteturautofficia.png?size=50x50&set=set1",
    name: "Celia Wigfall",
    university: "Pontifícia Universidade Católica do Rio Grande do Sul",
    sentences:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "cwigfalldd@flickr.com",
  },
  {
    color: "#2c9dcf",
    avatar:
      "https://robohash.org/autdoloremquevoluptas.png?size=50x50&set=set1",
    name: "Bondon Byham",
    university: "Brandman University",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "bbyhamde@goo.ne.jp",
  },
  {
    color: "#f6dd83",
    avatar: "https://robohash.org/molestiaeeiusfuga.png?size=50x50&set=set1",
    name: "Alister Rogez",
    university: "Ludwik Solski State Academy of Theatre in Cracow",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "arogezdf@pinterest.com",
  },
  {
    color: "#9e6fc3",
    avatar:
      "https://robohash.org/delectusconsecteturnatus.png?size=50x50&set=set1",
    name: "Jase Howick",
    university: "Guangdong University of Technology",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "jhowickdg@nationalgeographic.com",
  },
  {
    color: "#d73c2c",
    avatar: "https://robohash.org/solutasitcumque.png?size=50x50&set=set1",
    name: "Adelaida Umbert",
    university: "Bar-Ilan University",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "aumbertdh@nih.gov",
  },
  {
    color: "#7ade6d",
    avatar: "https://robohash.org/quodenimanimi.png?size=50x50&set=set1",
    name: "Rabbi Deniskevich",
    university: "Antioch New England Graduate School",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "rdeniskevichdi@geocities.com",
  },
  {
    color: "#57a7d7",
    avatar: "https://robohash.org/totamlaborenemo.png?size=50x50&set=set1",
    name: "Anderea Nulty",
    university: "Kaunas Medical Academy",
    sentences: "Donec semper sapien a libero. Nam dui.",
    email: "anultydj@illinois.edu",
  },
  {
    color: "#1bf023",
    avatar:
      "https://robohash.org/exercitationemetreiciendis.png?size=50x50&set=set1",
    name: "Jere Wintringham",
    university: "Universidad del Turabo",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "jwintringhamdk@google.co.uk",
  },
  {
    color: "#0fdb7b",
    avatar:
      "https://robohash.org/reprehenderitnisirepellat.png?size=50x50&set=set1",
    name: "Nellie Inglese",
    university: "University Institute of Oriental Studies",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "ninglesedl@google.com.hk",
  },
  {
    color: "#2131d2",
    avatar: "https://robohash.org/ipsametcum.png?size=50x50&set=set1",
    name: "Auberta Andre",
    university: "Greenwich University",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "aandredm@t.co",
  },
  {
    color: "#0d7bc3",
    avatar: "https://robohash.org/ipsanihilconsequatur.png?size=50x50&set=set1",
    name: "Lexi Blackesland",
    university: "Huanghe Science & Technology University",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "lblackeslanddn@npr.org",
  },
  {
    color: "#30b6a0",
    avatar: "https://robohash.org/hicomnisut.png?size=50x50&set=set1",
    name: "Noak Rodenhurst",
    university: "Université Moulay Ismail Meknès",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "nrodenhurstdo@odnoklassniki.ru",
  },
  {
    color: "#ec4d4e",
    avatar: "https://robohash.org/maioressitnon.png?size=50x50&set=set1",
    name: "Norrie Munehay",
    university: "National Dong Hwa University",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "nmunehaydp@oaic.gov.au",
  },
  {
    color: "#7a2cd0",
    avatar: "https://robohash.org/possimusquaeratiusto.png?size=50x50&set=set1",
    name: "Dimitri Swallwell",
    university: "Université d'Artois",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "dswallwelldq@wired.com",
  },
  {
    color: "#6afcd1",
    avatar: "https://robohash.org/suntdolorsit.png?size=50x50&set=set1",
    name: "Noland Masterman",
    university: "Ferris University",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    email: "nmastermandr@prlog.org",
  },
  {
    color: "#bee740",
    avatar:
      "https://robohash.org/voluptatemolestiaeiste.png?size=50x50&set=set1",
    name: "Laurella Bernhardi",
    university: "Khazar University",
    sentences: "Aenean auctor gravida sem.",
    email: "lbernhardids@nifty.com",
  },
  {
    color: "#4e7463",
    avatar: "https://robohash.org/temporacorruptiab.png?size=50x50&set=set1",
    name: "Ansley Ruckledge",
    university: "Meiji University",
    sentences: "Morbi quis tortor id nulla ultrices aliquet.",
    email: "aruckledgedt@blogtalkradio.com",
  },
  {
    color: "#7db4e5",
    avatar: "https://robohash.org/ateiusaut.png?size=50x50&set=set1",
    name: "Noell Jansson",
    university: "Czech Technical University of Prague",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "njanssondu@adobe.com",
  },
  {
    color: "#77eb08",
    avatar:
      "https://robohash.org/temporequiexercitationem.png?size=50x50&set=set1",
    name: "Nona Beadnell",
    university: "Oklahoma Christian University",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "nbeadnelldv@youtube.com",
  },
  {
    color: "#cb5c6a",
    avatar:
      "https://robohash.org/magnamdignissimosquia.png?size=50x50&set=set1",
    name: "Dionisio MacCaffrey",
    university: "Central Connecticut State University",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "dmaccaffreydw@admin.ch",
  },
  {
    color: "#61113a",
    avatar:
      "https://robohash.org/accusantiumrepellendusdolores.png?size=50x50&set=set1",
    name: "Florry Buckie",
    university: "University of the West Indies, Cave Hill",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "fbuckiedx@globo.com",
  },
  {
    color: "#b137f4",
    avatar: "https://robohash.org/suntverobeatae.png?size=50x50&set=set1",
    name: "Ilse Huffey",
    university: "Universidad Valle del Momboy",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "ihuffeydy@so-net.ne.jp",
  },
  {
    color: "#7737d6",
    avatar: "https://robohash.org/autculpaodio.png?size=50x50&set=set1",
    name: "Ulysses Lindsell",
    university: "Torbat Heydarieh University of Medical Sciences",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "ulindselldz@squarespace.com",
  },
  {
    color: "#00b82c",
    avatar:
      "https://robohash.org/laboreaspernaturdeleniti.png?size=50x50&set=set1",
    name: "Sissy Dominico",
    university: "Institute of Teachers Education, Ipoh",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "sdominicoe0@trellian.com",
  },
  {
    color: "#c7c6c5",
    avatar:
      "https://robohash.org/doloremqueautarchitecto.png?size=50x50&set=set1",
    name: "Mehetabel Wayman",
    university: "Silliman University",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "mwaymane1@youtube.com",
  },
  {
    color: "#1388a2",
    avatar: "https://robohash.org/quibusdamquofuga.png?size=50x50&set=set1",
    name: "Nerti Origin",
    university:
      "Ecole Nationale d'Ingénieurs des Techniques des Industries Agricoles et Alimentaires",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "norigine2@360.cn",
  },
  {
    color: "#6763f4",
    avatar:
      "https://robohash.org/voluptasdoloremdelectus.png?size=50x50&set=set1",
    name: "Marris Sighart",
    university: "University of Mobile",
    sentences: "Nam nulla.",
    email: "msigharte3@ameblo.jp",
  },
  {
    color: "#4203dd",
    avatar: "https://robohash.org/commodiquiarepellat.png?size=50x50&set=set1",
    name: "Sande Kiljan",
    university: "London School of Jewish Studies",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "skiljane4@businessinsider.com",
  },
  {
    color: "#ed8843",
    avatar: "https://robohash.org/repellatnemoeos.png?size=50x50&set=set1",
    name: "Zach Verecker",
    university: "Cardiff University",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "zvereckere5@examiner.com",
  },
  {
    color: "#0b569c",
    avatar: "https://robohash.org/eosteneturneque.png?size=50x50&set=set1",
    name: "Dallis Rihanek",
    university: "Dijla University College",
    sentences: "Cras pellentesque volutpat dui.",
    email: "drihaneke6@hc360.com",
  },
  {
    color: "#bce249",
    avatar: "https://robohash.org/estestsint.png?size=50x50&set=set1",
    name: "Dyanna Beadnall",
    university: "Indian Institute of Technology, Bombay",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "dbeadnalle7@t.co",
  },
  {
    color: "#dbf2ec",
    avatar: "https://robohash.org/velitomniseos.png?size=50x50&set=set1",
    name: "Rosanne Woollcott",
    university: "Great Zimbabwe University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    email: "rwoollcotte8@facebook.com",
  },
  {
    color: "#0e27d2",
    avatar: "https://robohash.org/distinctiovelitet.png?size=50x50&set=set1",
    name: "Terese Wasmer",
    university: "Samchok National University",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "twasmere9@nasa.gov",
  },
  {
    color: "#51c15b",
    avatar: "https://robohash.org/adpossimuseveniet.png?size=50x50&set=set1",
    name: "Willetta Jewkes",
    university: "Zhengzhou University of Technology",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "wjewkesea@feedburner.com",
  },
  {
    color: "#15ec85",
    avatar: "https://robohash.org/voluptateadet.png?size=50x50&set=set1",
    name: "Kasper Larcombe",
    university: "University of South Bohemia",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    email: "klarcombeeb@slashdot.org",
  },
  {
    color: "#bce4fa",
    avatar: "https://robohash.org/autmolestiaeesse.png?size=50x50&set=set1",
    name: "Brewer Tabbernor",
    university: "Universidad Interamericana de Educacion a Distancia de Panama",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "btabbernorec@paginegialle.it",
  },
  {
    color: "#47fde1",
    avatar: "https://robohash.org/eosrerummolestiae.png?size=50x50&set=set1",
    name: "Vivianna Heathcote",
    university: "Université Protestante au Congo",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "vheathcoteed@loc.gov",
  },
  {
    color: "#99fc7f",
    avatar: "https://robohash.org/quiaofficiisvoluptas.png?size=50x50&set=set1",
    name: "Mirabelle Galbreth",
    university: "Yantai Education Institute & Yantai Television University",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "mgalbrethee@macromedia.com",
  },
  {
    color: "#5a8156",
    avatar: "https://robohash.org/nonquoid.png?size=50x50&set=set1",
    name: "Carmine Yannikov",
    university: "Madonna University",
    sentences:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "cyannikovef@is.gd",
  },
  {
    color: "#f80e24",
    avatar: "https://robohash.org/faceredoloribuset.png?size=50x50&set=set1",
    name: "Gerick Urion",
    university: "Federal University of Technology, Minna",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "gurioneg@sina.com.cn",
  },
  {
    color: "#bb305f",
    avatar: "https://robohash.org/utaliasenim.png?size=50x50&set=set1",
    name: "Rutherford Duthy",
    university: "International School of Management",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "rduthyeh@ucla.edu",
  },
  {
    color: "#b78862",
    avatar: "https://robohash.org/eaquasaperiam.png?size=50x50&set=set1",
    name: "Trace Keyte",
    university: "Kuwait University",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "tkeyteei@pcworld.com",
  },
  {
    color: "#3b0968",
    avatar: "https://robohash.org/excepturiquodeserunt.png?size=50x50&set=set1",
    name: "Anna Brainsby",
    university: "Hokkaido Institute of Pharmaceutical Sciences",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "abrainsbyej@nasa.gov",
  },
  {
    color: "#be0fe0",
    avatar: "https://robohash.org/inventoreipsaet.png?size=50x50&set=set1",
    name: "Shaylyn Fleury",
    university: "Okinawa Prefectural University of Fine Arts",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "sfleuryek@wikipedia.org",
  },
  {
    color: "#fb4bc3",
    avatar: "https://robohash.org/etautemut.png?size=50x50&set=set1",
    name: "Brynne Kennerknecht",
    university: "University of Notre Dame Australia",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "bkennerknechtel@sciencedaily.com",
  },
  {
    color: "#3d2d23",
    avatar: "https://robohash.org/nameaplaceat.png?size=50x50&set=set1",
    name: "Herve Rodriguez",
    university: "Corporación Universitaria de Santander (UDES)",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "hrodriguezem@aol.com",
  },
  {
    color: "#d59309",
    avatar:
      "https://robohash.org/necessitatibusarchitectoeius.png?size=50x50&set=set1",
    name: "Seamus Saggs",
    university: "Ecole Nationale Supérieure de Physique de Grenoble",
    sentences: "Fusce posuere felis sed lacus.",
    email: "ssaggsen@hubpages.com",
  },
  {
    color: "#89b97a",
    avatar:
      "https://robohash.org/dictaexercitationemcum.png?size=50x50&set=set1",
    name: "Janel Phonix",
    university: "Universidad San Juan de la Cruz",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    email: "jphonixeo@theguardian.com",
  },
  {
    color: "#4db761",
    avatar: "https://robohash.org/namautmagni.png?size=50x50&set=set1",
    name: "Beck Tiller",
    university: "Kirikkale University",
    sentences: "Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "btillerep@xinhuanet.com",
  },
  {
    color: "#48694b",
    avatar:
      "https://robohash.org/solutadolorumprovident.png?size=50x50&set=set1",
    name: "Ame Amor",
    university: "Cabrini College",
    sentences: "Morbi vel lectus in quam fringilla rhoncus.",
    email: "aamoreq@mit.edu",
  },
  {
    color: "#72ed43",
    avatar: "https://robohash.org/quinumquamdoloremque.png?size=50x50&set=set1",
    name: "Rasla Dearnley",
    university: "Universidad Pedagógica Nacional, Unidad León",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "rdearnleyer@unblog.fr",
  },
  {
    color: "#4740d9",
    avatar: "https://robohash.org/voluptasfugitquasi.png?size=50x50&set=set1",
    name: "Mona Ford",
    university: "Mersin University",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.",
    email: "mfordes@furl.net",
  },
  {
    color: "#79c6db",
    avatar: "https://robohash.org/autsitlaudantium.png?size=50x50&set=set1",
    name: "Edlin Cumes",
    university: "Yaba College of Technology",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "ecumeset@sphinn.com",
  },
  {
    color: "#8906e4",
    avatar: "https://robohash.org/quiquiaautem.png?size=50x50&set=set1",
    name: "Scottie Redolfi",
    university: "Jubail Industrial College",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "sredolfieu@youku.com",
  },
  {
    color: "#cf5bf3",
    avatar:
      "https://robohash.org/explicaboaliquamperspiciatis.png?size=50x50&set=set1",
    name: "Kanya Rossiter",
    university: "Universitas Islam Riau",
    sentences: "Aliquam non mauris. Morbi non lectus.",
    email: "krossiterev@paypal.com",
  },
  {
    color: "#3f4ff6",
    avatar: "https://robohash.org/ducimusetanimi.png?size=50x50&set=set1",
    name: "Verna Edlyne",
    university: "Alvernia College",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    email: "vedlyneew@spiegel.de",
  },
  {
    color: "#f399f7",
    avatar: "https://robohash.org/harumexet.png?size=50x50&set=set1",
    name: "Valery Coltart",
    university: "Sheikhbahaee University",
    sentences: "Etiam vel augue.",
    email: "vcoltartex@ifeng.com",
  },
  {
    color: "#7169e0",
    avatar: "https://robohash.org/doloremqueducimusut.png?size=50x50&set=set1",
    name: "Lisle Basham",
    university: "Memorial University of Newfoundland",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "lbashamey@boston.com",
  },
  {
    color: "#0c97c8",
    avatar: "https://robohash.org/magniabrecusandae.png?size=50x50&set=set1",
    name: "Currey Nutty",
    university: "Uppsala University",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "cnuttyez@geocities.jp",
  },
  {
    color: "#2f6b17",
    avatar: "https://robohash.org/numquamautneque.png?size=50x50&set=set1",
    name: "Alvinia Wadeson",
    university: "University of Connecticut Health Center",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "awadesonf0@posterous.com",
  },
  {
    color: "#01e0d4",
    avatar: "https://robohash.org/quiaquasiab.png?size=50x50&set=set1",
    name: "Dorthy Broscombe",
    university: "Ozyegin University",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "dbroscombef1@a8.net",
  },
  {
    color: "#9c4007",
    avatar: "https://robohash.org/numquamteneturet.png?size=50x50&set=set1",
    name: "Norbie Lamping",
    university: "Universidade de Taubaté",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "nlampingf2@cyberchimps.com",
  },
  {
    color: "#96a929",
    avatar: "https://robohash.org/quisuscipitnulla.png?size=50x50&set=set1",
    name: "Andriette Josefovic",
    university: "Brjansk State Technical University",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "ajosefovicf3@cbc.ca",
  },
  {
    color: "#3b302f",
    avatar: "https://robohash.org/quosestlaudantium.png?size=50x50&set=set1",
    name: "Opaline Derry",
    university: "Northwestern College of Chiropractic",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "oderryf4@weibo.com",
  },
  {
    color: "#e1f9c8",
    avatar: "https://robohash.org/quisvoluptasdicta.png?size=50x50&set=set1",
    name: "Tansy Biaggelli",
    university: "Mejiro University",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "tbiaggellif5@weibo.com",
  },
  {
    color: "#560537",
    avatar: "https://robohash.org/etutvoluptatem.png?size=50x50&set=set1",
    name: "Harlie Gaylard",
    university: "Karnatak University",
    sentences: "Integer ac leo.",
    email: "hgaylardf6@example.com",
  },
  {
    color: "#755f4a",
    avatar: "https://robohash.org/quimaximeut.png?size=50x50&set=set1",
    name: "Ancell Houndsom",
    university: "University of Hail",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "ahoundsomf7@yale.edu",
  },
  {
    color: "#713f29",
    avatar: "https://robohash.org/nullaidsit.png?size=50x50&set=set1",
    name: "Stinky Dineges",
    university: "Université de M'sila",
    sentences: "Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "sdinegesf8@guardian.co.uk",
  },
  {
    color: "#9bece5",
    avatar: "https://robohash.org/nequenumquamrem.png?size=50x50&set=set1",
    name: "Oliver Brice",
    university: "Second University of Naples",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "obricef9@harvard.edu",
  },
  {
    color: "#eb9d4e",
    avatar: "https://robohash.org/consequaturesteum.png?size=50x50&set=set1",
    name: "Steven Vautre",
    university: "Siberian State Medical University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "svautrefa@newsvine.com",
  },
  {
    color: "#d1a1a5",
    avatar: "https://robohash.org/nameoslabore.png?size=50x50&set=set1",
    name: "Priscilla Veall",
    university: "Chiang Mai University",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    email: "pveallfb@dyndns.org",
  },
  {
    color: "#d3c317",
    avatar: "https://robohash.org/nemoeiusdolores.png?size=50x50&set=set1",
    name: "Obadiah Yule",
    university: "University of Mary",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "oyulefc@simplemachines.org",
  },
  {
    color: "#c64633",
    avatar: "https://robohash.org/doloressedcommodi.png?size=50x50&set=set1",
    name: "Glennis Denny",
    university: "University of Palermo",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "gdennyfd@geocities.jp",
  },
  {
    color: "#ca28eb",
    avatar: "https://robohash.org/etistelaboriosam.png?size=50x50&set=set1",
    name: "Penni Sattin",
    university: "Vermont Law School",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "psattinfe@state.tx.us",
  },
  {
    color: "#2c1373",
    avatar:
      "https://robohash.org/possimuscupiditateratione.png?size=50x50&set=set1",
    name: "Gabrielle MacFaell",
    university: "Lamphun College of Agriculture and Technology",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    email: "gmacfaellff@macromedia.com",
  },
  {
    color: "#e9bec8",
    avatar: "https://robohash.org/possimusetprovident.png?size=50x50&set=set1",
    name: "Merle Bellew",
    university: "Suzhou University",
    sentences: "Pellentesque ultrices mattis odio.",
    email: "mbellewfg@wsj.com",
  },
  {
    color: "#3af938",
    avatar:
      "https://robohash.org/delenitiestaccusantium.png?size=50x50&set=set1",
    name: "Rolando Squire",
    university: "Universitas Tanjungpura",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "rsquirefh@shinystat.com",
  },
  {
    color: "#6d80b9",
    avatar:
      "https://robohash.org/perspiciatisdeseruntiure.png?size=50x50&set=set1",
    name: "Sissie Raynham",
    university: "University of Kalyani",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "sraynhamfi@google.it",
  },
  {
    color: "#546479",
    avatar: "https://robohash.org/reiciendiseosquos.png?size=50x50&set=set1",
    name: "Moe Redihalgh",
    university: "Universidad Salesiana de Bolivia",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "mredihalghfj@alibaba.com",
  },
  {
    color: "#d7ebdc",
    avatar: "https://robohash.org/atotamsed.png?size=50x50&set=set1",
    name: "Lew Van Geffen",
    university: "Baker College of Cadillac",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "lvanfk@amazon.co.uk",
  },
  {
    color: "#26d078",
    avatar:
      "https://robohash.org/molestiasquiaprovident.png?size=50x50&set=set1",
    name: "Serene Jann",
    university: "University of Sydney",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "sjannfl@reverbnation.com",
  },
  {
    color: "#612fae",
    avatar: "https://robohash.org/quosolutanemo.png?size=50x50&set=set1",
    name: "Ive Ottery",
    university: "University of Wisconsin - Superior",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "iotteryfm@vimeo.com",
  },
  {
    color: "#d742b3",
    avatar: "https://robohash.org/doloremealaboriosam.png?size=50x50&set=set1",
    name: "Lesley MacVaugh",
    university: "University of San Marino",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "lmacvaughfn@wordpress.org",
  },
  {
    color: "#294b52",
    avatar: "https://robohash.org/nullapariaturbeatae.png?size=50x50&set=set1",
    name: "Henrietta Reilinger",
    university: "Universidad Autónoma de la Laguna",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    email: "hreilingerfo@gravatar.com",
  },
  {
    color: "#ac0b86",
    avatar: "https://robohash.org/ateiusa.png?size=50x50&set=set1",
    name: "Marty Showell",
    university: "Technological Education Institute of Mesologgi",
    sentences: "Proin interdum mauris non ligula pellentesque ultrices.",
    email: "mshowellfp@hibu.com",
  },
  {
    color: "#a3f197",
    avatar:
      "https://robohash.org/sitblanditiiscupiditate.png?size=50x50&set=set1",
    name: "Ewan Gai",
    university: "Universidade Veiga de Almeida",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    email: "egaifq@npr.org",
  },
  {
    color: "#2d809a",
    avatar: "https://robohash.org/undelaudantiumid.png?size=50x50&set=set1",
    name: "Brien Harrap",
    university: "University of Tampere",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "bharrapfr@blog.com",
  },
  {
    color: "#c752b4",
    avatar: "https://robohash.org/exnobiseveniet.png?size=50x50&set=set1",
    name: "Kaja Tarpey",
    university: "University of Teramo",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "ktarpeyfs@bbc.co.uk",
  },
  {
    color: "#826239",
    avatar: "https://robohash.org/nullavoluptasid.png?size=50x50&set=set1",
    name: "Adolpho Critoph",
    university: "Universitas Islam Nusantara",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "acritophft@blogspot.com",
  },
  {
    color: "#6b7a5b",
    avatar: "https://robohash.org/liberovoluptasnisi.png?size=50x50&set=set1",
    name: "Ernesta Franks",
    university: "Islamic Azad University, Khorasgan",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "efranksfu@netlog.com",
  },
  {
    color: "#26bd9d",
    avatar:
      "https://robohash.org/eumdolorumrepellendus.png?size=50x50&set=set1",
    name: "Lotti Mant",
    university: "Istanbul Technical University",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "lmantfv@lycos.com",
  },
  {
    color: "#6868ba",
    avatar: "https://robohash.org/doloreutet.png?size=50x50&set=set1",
    name: "Herculie Brellin",
    university: "Indian Statistical Institute",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "hbrellinfw@amazon.de",
  },
  {
    color: "#2d9991",
    avatar: "https://robohash.org/natusisteconsequatur.png?size=50x50&set=set1",
    name: "Sally Crose",
    university: "University of Eldoret",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "scrosefx@reddit.com",
  },
  {
    color: "#97850f",
    avatar: "https://robohash.org/utdoloresquod.png?size=50x50&set=set1",
    name: "Chrisse Gillott",
    university: "University of Information Technology & Sciences",
    sentences: "Vivamus vestibulum sagittis sapien.",
    email: "cgillottfy@ft.com",
  },
  {
    color: "#bfa0cb",
    avatar: "https://robohash.org/quosquifuga.png?size=50x50&set=set1",
    name: "Nettle Wince",
    university: "Russel Sage College",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "nwincefz@wordpress.org",
  },
  {
    color: "#0a322d",
    avatar: "https://robohash.org/nihilnihilsed.png?size=50x50&set=set1",
    name: "Dorrie Dukesbury",
    university: "Shanghai City College",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "ddukesburyg0@hatena.ne.jp",
  },
  {
    color: "#eb56f6",
    avatar:
      "https://robohash.org/quisquamsuscipitbeatae.png?size=50x50&set=set1",
    name: "Chrisy Kermeen",
    university: "Dublin Institute for Advanced Studies",
    sentences: "Integer ac neque.",
    email: "ckermeeng1@webmd.com",
  },
  {
    color: "#0492a5",
    avatar: "https://robohash.org/modicumplaceat.png?size=50x50&set=set1",
    name: "Stevie Satterfitt",
    university: "Lewis and Clark College",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "ssatterfittg2@blog.com",
  },
  {
    color: "#345fde",
    avatar: "https://robohash.org/hicetet.png?size=50x50&set=set1",
    name: "Joannes Farrears",
    university: "Athenaeum Pontificium Regina Apostolorum",
    sentences:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    email: "jfarrearsg3@wisc.edu",
  },
  {
    color: "#515e7d",
    avatar: "https://robohash.org/autistenesciunt.png?size=50x50&set=set1",
    name: "Carmine Waskett",
    university: "Foundation University",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "cwaskettg4@domainmarket.com",
  },
  {
    color: "#3facfe",
    avatar: "https://robohash.org/utfaceresoluta.png?size=50x50&set=set1",
    name: "Chickie Bent",
    university: "Hanseo University",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "cbentg5@lulu.com",
  },
  {
    color: "#0757d9",
    avatar: "https://robohash.org/dictaquinobis.png?size=50x50&set=set1",
    name: "Eden Moubray",
    university: "Islamic Azad University, Yazd",
    sentences: "Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "emoubrayg6@intel.com",
  },
  {
    color: "#7ed2fe",
    avatar:
      "https://robohash.org/ipsumasperioresvoluptatem.png?size=50x50&set=set1",
    name: "Willard Hallsworth",
    university: "Central Police University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "whallsworthg7@ameblo.jp",
  },
  {
    color: "#d79266",
    avatar: "https://robohash.org/animiseddolore.png?size=50x50&set=set1",
    name: "Tanny Readitt",
    university: "Universidad de La Salle",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "treadittg8@theatlantic.com",
  },
  {
    color: "#98cde7",
    avatar: "https://robohash.org/estquoimpedit.png?size=50x50&set=set1",
    name: "Lilah Balling",
    university: "Gretsa Universtiy",
    sentences: "Phasellus sit amet erat.",
    email: "lballingg9@photobucket.com",
  },
  {
    color: "#a03ae0",
    avatar: "https://robohash.org/autfugiatsint.png?size=50x50&set=set1",
    name: "Patrick Dysart",
    university: "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "pdysartga@jiathis.com",
  },
  {
    color: "#8c0638",
    avatar: "https://robohash.org/esseveniamamet.png?size=50x50&set=set1",
    name: "Allister Mar",
    university: "North Island College",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "amargb@state.gov",
  },
  {
    color: "#037b47",
    avatar: "https://robohash.org/adlaudantiumaut.png?size=50x50&set=set1",
    name: "Cicely Bardsley",
    university: "Tianjin University",
    sentences: "Aliquam non mauris.",
    email: "cbardsleygc@meetup.com",
  },
  {
    color: "#832537",
    avatar: "https://robohash.org/temporeisteet.png?size=50x50&set=set1",
    name: "Elston Gallehawk",
    university: "Thammasat University",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "egallehawkgd@archive.org",
  },
  {
    color: "#b6cce6",
    avatar: "https://robohash.org/eosvitaedebitis.png?size=50x50&set=set1",
    name: "Gilberte Bampkin",
    university: "Chalmers University of Technology",
    sentences: "Suspendisse potenti. In eleifend quam a odio.",
    email: "gbampkinge@wix.com",
  },
  {
    color: "#81b959",
    avatar: "https://robohash.org/quiaadipisciimpedit.png?size=50x50&set=set1",
    name: "Aridatha Kendal",
    university: "Shimonoseki City University",
    sentences: "Nulla ut erat id mauris vulputate elementum.",
    email: "akendalgf@woothemes.com",
  },
  {
    color: "#6610b2",
    avatar: "https://robohash.org/animiculpaea.png?size=50x50&set=set1",
    name: "Angela Figgures",
    university: "Yasuda Women's University",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "afigguresgg@sogou.com",
  },
  {
    color: "#c6fc54",
    avatar:
      "https://robohash.org/doloribusprovidentnon.png?size=50x50&set=set1",
    name: "Vincents Jollye",
    university: "Franklin University",
    sentences:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "vjollyegh@ovh.net",
  },
  {
    color: "#1605d6",
    avatar: "https://robohash.org/errorblanditiisharum.png?size=50x50&set=set1",
    name: "Essie Merriman",
    university: "Osaka University of Economics",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "emerrimangi@vistaprint.com",
  },
  {
    color: "#97c3b7",
    avatar: "https://robohash.org/dolorlaboresaepe.png?size=50x50&set=set1",
    name: "Zach Mulholland",
    university: "Iwaki Meisei University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "zmulhollandgj@scientificamerican.com",
  },
  {
    color: "#51ddba",
    avatar: "https://robohash.org/delectusvelamet.png?size=50x50&set=set1",
    name: "Lucio Woodhall",
    university: "University of Benghazi",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "lwoodhallgk@constantcontact.com",
  },
  {
    color: "#37a776",
    avatar: "https://robohash.org/corruptiadcumque.png?size=50x50&set=set1",
    name: "Carissa Gustus",
    university: "William Jewell College",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "cgustusgl@netvibes.com",
  },
  {
    color: "#2c81f0",
    avatar: "https://robohash.org/rerumquiaet.png?size=50x50&set=set1",
    name: "Cyndy Beels",
    university: "Moscow State University M.V. Lomonosov",
    sentences: "Praesent blandit. Nam nulla.",
    email: "cbeelsgm@fc2.com",
  },
  {
    color: "#6cba33",
    avatar: "https://robohash.org/quimagnamomnis.png?size=50x50&set=set1",
    name: "Carolee Kenaway",
    university: "Musashi Institute of Technology",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "ckenawaygn@walmart.com",
  },
  {
    color: "#5a044a",
    avatar: "https://robohash.org/oditetqui.png?size=50x50&set=set1",
    name: "Ariel Harme",
    university:
      "Ecole pour les Etudes et la Recherche en Informatique et Electronique",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "aharmego@pen.io",
  },
  {
    color: "#c6e7fe",
    avatar: "https://robohash.org/quosincidunteaque.png?size=50x50&set=set1",
    name: "Leanora Sweeny",
    university: "Darton College",
    sentences: "Donec vitae nisi.",
    email: "lsweenygp@indiegogo.com",
  },
  {
    color: "#261bb5",
    avatar: "https://robohash.org/atculpadolorem.png?size=50x50&set=set1",
    name: "Marlie Brassington",
    university: "King College",
    sentences: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "mbrassingtongq@forbes.com",
  },
  {
    color: "#33affe",
    avatar:
      "https://robohash.org/facilistenetureligendi.png?size=50x50&set=set1",
    name: "Rees Bradbury",
    university: "Bundelkhand University",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "rbradburygr@baidu.com",
  },
  {
    color: "#10e6e9",
    avatar: "https://robohash.org/similiqueodioeos.png?size=50x50&set=set1",
    name: "Coleman Goulston",
    university: "New York University, Abu Dhabi",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "cgoulstongs@apple.com",
  },
  {
    color: "#3c67ab",
    avatar: "https://robohash.org/autvelomnis.png?size=50x50&set=set1",
    name: "Elton Joire",
    university: "Illinois College of Optometry",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "ejoiregt@storify.com",
  },
  {
    color: "#9e989d",
    avatar: "https://robohash.org/etquiet.png?size=50x50&set=set1",
    name: "Antonius Wrettum",
    university: "University of Finance and Management in Bialystok",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "awrettumgu@kickstarter.com",
  },
  {
    color: "#0c50e9",
    avatar: "https://robohash.org/delenitiipsumplaceat.png?size=50x50&set=set1",
    name: "Val Trulock",
    university: "Southern Utah University",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "vtrulockgv@ustream.tv",
  },
  {
    color: "#dac826",
    avatar: "https://robohash.org/nemoautet.png?size=50x50&set=set1",
    name: "Bari McPike",
    university: "Kendall College",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "bmcpikegw@yahoo.co.jp",
  },
  {
    color: "#f4e496",
    avatar: "https://robohash.org/idestad.png?size=50x50&set=set1",
    name: "Maxwell Candlin",
    university: "Rasmussen College, Minnesota Campuses",
    sentences: "Proin eu mi.",
    email: "mcandlingx@chron.com",
  },
  {
    color: "#e43e92",
    avatar: "https://robohash.org/earumvitaeest.png?size=50x50&set=set1",
    name: "Inga Winfield",
    university: "Universiti Malaysia Kelantan",
    sentences:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "iwinfieldgy@google.pl",
  },
  {
    color: "#d01b6e",
    avatar:
      "https://robohash.org/providentperferendisnemo.png?size=50x50&set=set1",
    name: "Nelie Carnoghan",
    university: "Southern Vermont College",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "ncarnoghangz@a8.net",
  },
  {
    color: "#ae097f",
    avatar: "https://robohash.org/etquaehic.png?size=50x50&set=set1",
    name: "Aurel Manilow",
    university: "St Theresa's Medical University",
    sentences:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "amanilowh0@com.com",
  },
  {
    color: "#ac198d",
    avatar:
      "https://robohash.org/providentvoluptateaut.png?size=50x50&set=set1",
    name: "Ailis Bemand",
    university: "University of Windsor",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "abemandh1@cpanel.net",
  },
  {
    color: "#adf9b3",
    avatar: "https://robohash.org/autipsamesse.png?size=50x50&set=set1",
    name: "Alanson Amor",
    university: "Universidad Tecnológica de Santiago",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "aamorh2@wp.com",
  },
  {
    color: "#23ced2",
    avatar: "https://robohash.org/autfugiteum.png?size=50x50&set=set1",
    name: "Kristos Antonietti",
    university: "Belarussian State Academy of Music",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "kantoniettih3@fda.gov",
  },
  {
    color: "#84fdf8",
    avatar: "https://robohash.org/nequequiautem.png?size=50x50&set=set1",
    name: "Ivette Valentine",
    university: "Pomor State University",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "ivalentineh4@seattletimes.com",
  },
  {
    color: "#7dd710",
    avatar: "https://robohash.org/quisquamnam.png?size=50x50&set=set1",
    name: "Templeton Kelinge",
    university: "Bangladesh University",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "tkelingeh5@unesco.org",
  },
  {
    color: "#61f64f",
    avatar: "https://robohash.org/sunteaqui.png?size=50x50&set=set1",
    name: "Weidar Dorr",
    university: "Andrassy Gyula German Speaking University Budapest",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "wdorrh6@nydailynews.com",
  },
  {
    color: "#6600b9",
    avatar: "https://robohash.org/evenietomnisdolores.png?size=50x50&set=set1",
    name: "Dov Toller",
    university: "Taj Institute of Higher Education",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "dtollerh7@printfriendly.com",
  },
  {
    color: "#7476ec",
    avatar: "https://robohash.org/doloresdoloremmagni.png?size=50x50&set=set1",
    name: "Cobbie Spencock",
    university: "Universidad Cardenal Herrera-CEU",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "cspencockh8@washington.edu",
  },
  {
    color: "#cfb9dc",
    avatar:
      "https://robohash.org/magnamcorruptipariatur.png?size=50x50&set=set1",
    name: "Papageno Ricket",
    university: "Monash University, Malaysia Campus",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "pricketh9@livejournal.com",
  },
  {
    color: "#220b94",
    avatar: "https://robohash.org/undeerrorratione.png?size=50x50&set=set1",
    name: "Othilie Miliffe",
    university: "University of Greenland",
    sentences: "Donec dapibus. Duis at velit eu est congue elementum.",
    email: "omiliffeha@topsy.com",
  },
  {
    color: "#fa6efc",
    avatar:
      "https://robohash.org/consecteturdictanihil.png?size=50x50&set=set1",
    name: "Calv Abramski",
    university: "Université Mentouri Constantine",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "cabramskihb@china.com.cn",
  },
  {
    color: "#5f6ede",
    avatar: "https://robohash.org/aitaqueea.png?size=50x50&set=set1",
    name: "Meridith Kliemann",
    university: "Uttarakhand Technical University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "mkliemannhc@ihg.com",
  },
  {
    color: "#a90ab0",
    avatar: "https://robohash.org/beataeautcumque.png?size=50x50&set=set1",
    name: "Leese Burnett",
    university: "University of Canterbury",
    sentences:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "lburnetthd@scribd.com",
  },
  {
    color: "#786e41",
    avatar:
      "https://robohash.org/accusamusprovidentexpedita.png?size=50x50&set=set1",
    name: "Kamillah Battleson",
    university: "Botho University",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "kbattlesonhe@tripod.com",
  },
  {
    color: "#46d3f2",
    avatar: "https://robohash.org/idporroquia.png?size=50x50&set=set1",
    name: "April Braithwaite",
    university: "University of Wisconsin - Whitewater",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "abraithwaitehf@nydailynews.com",
  },
  {
    color: "#f5ed9a",
    avatar: "https://robohash.org/doloresomnisquo.png?size=50x50&set=set1",
    name: "Leopold Connechie",
    university: "Shanmugha Arts Science Technology and Research Academy",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "lconnechiehg@engadget.com",
  },
  {
    color: "#631a29",
    avatar:
      "https://robohash.org/reiciendisblanditiisnesciunt.png?size=50x50&set=set1",
    name: "Yehudit MacNaughton",
    university: "Shujitsu Women's University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "ymacnaughtonhh@slideshare.net",
  },
  {
    color: "#78fec6",
    avatar: "https://robohash.org/namnumquamdelectus.png?size=50x50&set=set1",
    name: "Ava Fiddymont",
    university: "Kasem Bundit University",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    email: "afiddymonthi@cafepress.com",
  },
  {
    color: "#823cd2",
    avatar: "https://robohash.org/inventoredictaaut.png?size=50x50&set=set1",
    name: "Denise Gravie",
    university: "Technical University of Lublin",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "dgraviehj@merriam-webster.com",
  },
  {
    color: "#82f853",
    avatar: "https://robohash.org/voluptatibusautaut.png?size=50x50&set=set1",
    name: "Thadeus Grasser",
    university: "Merz Akademie, Hochschule für Gestaltung Stuttgart",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "tgrasserhk@webeden.co.uk",
  },
  {
    color: "#6ba4ff",
    avatar: "https://robohash.org/quosvoluptatumvelit.png?size=50x50&set=set1",
    name: "Alfi Climance",
    university: "University of Osijek",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "aclimancehl@moonfruit.com",
  },
  {
    color: "#def6f5",
    avatar: "https://robohash.org/dolorestaut.png?size=50x50&set=set1",
    name: "Masha Kearsley",
    university: "Chongqing Vocational College of Public Transportation",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "mkearsleyhm@hubpages.com",
  },
  {
    color: "#072b38",
    avatar: "https://robohash.org/etiustocum.png?size=50x50&set=set1",
    name: "Sarene Bolens",
    university: "American International University - Bangladesh",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "sbolenshn@columbia.edu",
  },
  {
    color: "#5b9ef6",
    avatar: "https://robohash.org/voluptaseumnam.png?size=50x50&set=set1",
    name: "Trey Proffitt",
    university: "Southern University - Baton Rouge",
    sentences:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "tproffittho@icio.us",
  },
  {
    color: "#be1f1f",
    avatar: "https://robohash.org/atqueetiure.png?size=50x50&set=set1",
    name: "Malva Goozee",
    university: "Tribhuvan University Kathmandu",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "mgoozeehp@freewebs.com",
  },
  {
    color: "#220e23",
    avatar: "https://robohash.org/explicabodolorquia.png?size=50x50&set=set1",
    name: "Llywellyn Luckcock",
    university: "Akaki Tsereteli State University",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "lluckcockhq@telegraph.co.uk",
  },
  {
    color: "#9b48fa",
    avatar: "https://robohash.org/numquamquoeum.png?size=50x50&set=set1",
    name: "Patricia Bainbridge",
    university: "Adeyemi College of Education",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "pbainbridgehr@uol.com.br",
  },
  {
    color: "#9d79b0",
    avatar: "https://robohash.org/architectocumqui.png?size=50x50&set=set1",
    name: "Rickey Wildt",
    university: "University of North Carolina at Greensboro",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "rwildths@networksolutions.com",
  },
  {
    color: "#009508",
    avatar:
      "https://robohash.org/teneturimpeditaccusantium.png?size=50x50&set=set1",
    name: "Louise Joontjes",
    university: "University of World Economy and Diplomacy",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "ljoontjesht@blogger.com",
  },
  {
    color: "#0d27e7",
    avatar: "https://robohash.org/delenitiametnisi.png?size=50x50&set=set1",
    name: "Dimitry Tomalin",
    university: "Miami University of Ohio - Middletown",
    sentences: "Duis mattis egestas metus. Aenean fermentum.",
    email: "dtomalinhu@flavors.me",
  },
  {
    color: "#a0ffae",
    avatar: "https://robohash.org/abitaquefuga.png?size=50x50&set=set1",
    name: "Hurley Paulich",
    university: "Technische Universität Chemnitz",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "hpaulichhv@theguardian.com",
  },
  {
    color: "#a87b87",
    avatar:
      "https://robohash.org/voluptasvoluptatesquod.png?size=50x50&set=set1",
    name: "Brewster Jaukovic",
    university: "Otterbein College",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "bjaukovichw@elpais.com",
  },
  {
    color: "#dbb1b9",
    avatar: "https://robohash.org/natusquidolores.png?size=50x50&set=set1",
    name: "Selestina Smalley",
    university: "Winthrop University",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "ssmalleyhx@lycos.com",
  },
  {
    color: "#4d3fcf",
    avatar:
      "https://robohash.org/etofficiisconsequatur.png?size=50x50&set=set1",
    name: "Freddy Finan",
    university: "Hariri Canadian University",
    sentences: "Nullam varius.",
    email: "ffinanhy@google.com.au",
  },
  {
    color: "#9a76a9",
    avatar: "https://robohash.org/quicorporissunt.png?size=50x50&set=set1",
    name: "Diane Gookey",
    university: "Universidade de Nova Iguaçu",
    sentences: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "dgookeyhz@privacy.gov.au",
  },
  {
    color: "#848094",
    avatar: "https://robohash.org/laudantiumautofficia.png?size=50x50&set=set1",
    name: "Torrence Borton",
    university: "Rock Valley College",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "tbortoni0@slate.com",
  },
  {
    color: "#3e72a2",
    avatar: "https://robohash.org/velisteet.png?size=50x50&set=set1",
    name: "Martguerita Elsip",
    university: "Universidad Ciencias Comerciales",
    sentences:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "melsipi1@latimes.com",
  },
  {
    color: "#7614a0",
    avatar: "https://robohash.org/providentidofficia.png?size=50x50&set=set1",
    name: "Osbourne Blakeway",
    university: "Hebron University",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "oblakewayi2@shutterfly.com",
  },
  {
    color: "#8a7667",
    avatar: "https://robohash.org/estaperiamsint.png?size=50x50&set=set1",
    name: "Tabbi Posnette",
    university: 'Universidad "Juan Agustín Maza"',
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "tposnettei3@house.gov",
  },
  {
    color: "#794ae7",
    avatar: "https://robohash.org/nonaperiamautem.png?size=50x50&set=set1",
    name: "Nadine Hanvey",
    university: "University of Technology",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "nhanveyi4@blog.com",
  },
  {
    color: "#bf24ce",
    avatar:
      "https://robohash.org/illumexcepturiveritatis.png?size=50x50&set=set1",
    name: "Darwin Kimberly",
    university: "New York Law School",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    email: "dkimberlyi5@goo.gl",
  },
  {
    color: "#21ccad",
    avatar: "https://robohash.org/odioteneturvoluptas.png?size=50x50&set=set1",
    name: "Nataline Scholler",
    university: 'University of Korca "Fan Noli"',
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "nscholleri6@mlb.com",
  },
  {
    color: "#3e78f5",
    avatar: "https://robohash.org/nobisofficiasuscipit.png?size=50x50&set=set1",
    name: "Iver Littrell",
    university: "Karachi School of Art",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    email: "ilittrelli7@wikipedia.org",
  },
  {
    color: "#9418aa",
    avatar: "https://robohash.org/beataeindoloremque.png?size=50x50&set=set1",
    name: "Keen Witherup",
    university: "University of the Humanities",
    sentences:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    email: "kwitherupi8@un.org",
  },
  {
    color: "#c74c53",
    avatar: "https://robohash.org/quoutnumquam.png?size=50x50&set=set1",
    name: "Beaufort Saffer",
    university: "Miyazaki Prefectural Nursing University",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "bsafferi9@dell.com",
  },
  {
    color: "#e50b6a",
    avatar:
      "https://robohash.org/laborumdoloribusmaxime.png?size=50x50&set=set1",
    name: "Hestia Geeve",
    university: "Sapporo International University",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "hgeeveia@cbslocal.com",
  },
  {
    color: "#44ef77",
    avatar: "https://robohash.org/molestiaeexsaepe.png?size=50x50&set=set1",
    name: "Gill Sanz",
    university: "Zetech College",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.",
    email: "gsanzib@exblog.jp",
  },
  {
    color: "#4ea479",
    avatar: "https://robohash.org/etcorruptinon.png?size=50x50&set=set1",
    name: "Elmore Rozenzweig",
    university: "Illinois Institute of Technology",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "erozenzweigic@unblog.fr",
  },
  {
    color: "#1bae64",
    avatar: "https://robohash.org/ametdolorvoluptatum.png?size=50x50&set=set1",
    name: "Cahra Morewood",
    university: "Kyushu Women's University",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "cmorewoodid@sciencedirect.com",
  },
  {
    color: "#83652d",
    avatar: "https://robohash.org/earumeumomnis.png?size=50x50&set=set1",
    name: "Trudy Dagger",
    university: "Amur State University",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "tdaggerie@nba.com",
  },
  {
    color: "#665208",
    avatar:
      "https://robohash.org/natusducimusdistinctio.png?size=50x50&set=set1",
    name: "Taddeusz Leith",
    university:
      "Ecole Européenne de Chimie, Polymères et Matériaux de Strasbourg",
    sentences: "Donec semper sapien a libero. Nam dui.",
    email: "tleithif@virginia.edu",
  },
  {
    color: "#726c96",
    avatar: "https://robohash.org/perferendisuta.png?size=50x50&set=set1",
    name: "Erskine Cleary",
    university: "Universiti Islam Sultan Sharif Ali",
    sentences:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    email: "eclearyig@nih.gov",
  },
  {
    color: "#05c088",
    avatar:
      "https://robohash.org/voluptatemcommodifacilis.png?size=50x50&set=set1",
    name: "Bruis Studders",
    university: "Kwan Dong University",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "bstuddersih@multiply.com",
  },
  {
    color: "#bb2b4f",
    avatar: "https://robohash.org/eosetet.png?size=50x50&set=set1",
    name: "Saxe McCann",
    university: "Grand Canyon University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "smccannii@bandcamp.com",
  },
  {
    color: "#6d77da",
    avatar: "https://robohash.org/iustoatut.png?size=50x50&set=set1",
    name: "Leesa Bertolaccini",
    university: "Al Yarmouk University College",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "lbertolacciniij@mysql.com",
  },
  {
    color: "#ef9140",
    avatar: "https://robohash.org/suscipitlaboretotam.png?size=50x50&set=set1",
    name: "Gayel Simacek",
    university: "Dr. Babasaheb Ambedkar Marathwada Universtiy",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    email: "gsimacekik@patch.com",
  },
  {
    color: "#6f74ee",
    avatar: "https://robohash.org/quiaetaut.png?size=50x50&set=set1",
    name: "Rafaellle Winspurr",
    university: "Satakunta University Of Applied Scinces",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "rwinspurril@narod.ru",
  },
  {
    color: "#7cadae",
    avatar: "https://robohash.org/utoccaecatieum.png?size=50x50&set=set1",
    name: "Philippe Moyer",
    university: "Karadeniz Technical University",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "pmoyerim@discuz.net",
  },
  {
    color: "#58940c",
    avatar: "https://robohash.org/facilisassumendaiste.png?size=50x50&set=set1",
    name: "Enos Ruprich",
    university: "Fachhochschule Flensburg",
    sentences: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "eruprichin@163.com",
  },
  {
    color: "#be7488",
    avatar: "https://robohash.org/utconsequaturquidem.png?size=50x50&set=set1",
    name: "Langsdon Bibey",
    university: "Université des Montagnes",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "lbibeyio@census.gov",
  },
  {
    color: "#8cc748",
    avatar:
      "https://robohash.org/nihilexercitationemquos.png?size=50x50&set=set1",
    name: "Alic D'Arrigo",
    university: "School of Education Pisa",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    email: "adarrigoip@cbslocal.com",
  },
  {
    color: "#22809c",
    avatar: "https://robohash.org/autadnon.png?size=50x50&set=set1",
    name: "Launce Marvell",
    university: "Université Kongo",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "lmarvelliq@newyorker.com",
  },
  {
    color: "#5a341c",
    avatar: "https://robohash.org/autinciduntrepellat.png?size=50x50&set=set1",
    name: "Cornelle Stoppard",
    university: "Poznan School of Banking",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "cstoppardir@walmart.com",
  },
  {
    color: "#b4795f",
    avatar:
      "https://robohash.org/dolorprovidentmolestias.png?size=50x50&set=set1",
    name: "Randie Alesbrook",
    university: "Fairfield University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "ralesbrookis@cocolog-nifty.com",
  },
  {
    color: "#fda122",
    avatar:
      "https://robohash.org/pariatureligendioptio.png?size=50x50&set=set1",
    name: "Kamilah Newlands",
    university: "The Manchester Metropolitan University",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "knewlandsit@w3.org",
  },
  {
    color: "#10682b",
    avatar: "https://robohash.org/autemsolutaratione.png?size=50x50&set=set1",
    name: "Meier Cottey",
    university: "University of Salford",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "mcotteyiu@drupal.org",
  },
  {
    color: "#76bd8c",
    avatar: "https://robohash.org/eligendisedharum.png?size=50x50&set=set1",
    name: "Greggory Koppke",
    university: "Gwangju Catholic College",
    sentences: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "gkoppkeiv@linkedin.com",
  },
  {
    color: "#5352dc",
    avatar:
      "https://robohash.org/laboreinciduntpossimus.png?size=50x50&set=set1",
    name: "Clark Paoloni",
    university: "Burapha University",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "cpaoloniiw@about.com",
  },
  {
    color: "#0b9ff1",
    avatar:
      "https://robohash.org/numquammaximemollitia.png?size=50x50&set=set1",
    name: "Germaine Siddaley",
    university: "Wuyi University",
    sentences:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "gsiddaleyix@jimdo.com",
  },
  {
    color: "#8f59e0",
    avatar: "https://robohash.org/molestiasofficiasit.png?size=50x50&set=set1",
    name: "Sammie Stanex",
    university: "Asia E University",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "sstanexiy@nsw.gov.au",
  },
  {
    color: "#f80a06",
    avatar:
      "https://robohash.org/reprehenderitnostrumet.png?size=50x50&set=set1",
    name: "Dedie Tomankiewicz",
    university: "Kasetsart University",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "dtomankiewicziz@eventbrite.com",
  },
  {
    color: "#436bbf",
    avatar: "https://robohash.org/occaecatidebitisqui.png?size=50x50&set=set1",
    name: "Weston Sarsons",
    university:
      "Ecole Spéciale des Travaux Publics du Bâtiment et de l'Industrie",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "wsarsonsj0@free.fr",
  },
  {
    color: "#cd2c26",
    avatar: "https://robohash.org/quaemolestiaeipsa.png?size=50x50&set=set1",
    name: "Mathe Antalffy",
    university: "University of Akureyri",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "mantalffyj1@ft.com",
  },
  {
    color: "#076d0f",
    avatar: "https://robohash.org/doloribusenimnobis.png?size=50x50&set=set1",
    name: "Faulkner Caselick",
    university: "Hogeschool Antwerpen",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "fcaselickj2@census.gov",
  },
  {
    color: "#d427b3",
    avatar:
      "https://robohash.org/hicmaioresconsequatur.png?size=50x50&set=set1",
    name: "Field Jepson",
    university: "Beijing University of Aeronautics and Astronautics",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "fjepsonj3@infoseek.co.jp",
  },
  {
    color: "#e0d92a",
    avatar: "https://robohash.org/doloroditiusto.png?size=50x50&set=set1",
    name: "Ailee Guerin",
    university: "Africa International University",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "aguerinj4@statcounter.com",
  },
  {
    color: "#af04e3",
    avatar:
      "https://robohash.org/doloremtemporadoloremque.png?size=50x50&set=set1",
    name: "Giuditta Coursor",
    university: "University of Exeter",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "gcoursorj5@github.io",
  },
  {
    color: "#576103",
    avatar: "https://robohash.org/accusamusdoloresed.png?size=50x50&set=set1",
    name: "Colas Gianilli",
    university: "Monash University, Malaysia Campus",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    email: "cgianillij6@oaic.gov.au",
  },
  {
    color: "#5c49cf",
    avatar: "https://robohash.org/explicabooditquasi.png?size=50x50&set=set1",
    name: "Merl Helgass",
    university: "Pennsylvania State University - Altoona",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "mhelgassj7@4shared.com",
  },
  {
    color: "#c19ef3",
    avatar: "https://robohash.org/nostrumautaut.png?size=50x50&set=set1",
    name: "Even Thorneloe",
    university: "Vietnam Maritime University",
    sentences:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "ethorneloej8@sun.com",
  },
  {
    color: "#2fc8ce",
    avatar: "https://robohash.org/quieosut.png?size=50x50&set=set1",
    name: "Fallon Weetch",
    university: "Universidad de Magallanes",
    sentences: "Phasellus sit amet erat. Nulla tempus.",
    email: "fweetchj9@jigsy.com",
  },
  {
    color: "#360889",
    avatar: "https://robohash.org/sedmaximesunt.png?size=50x50&set=set1",
    name: "Dorine Dombrell",
    university: "Ternopil Academy of National Economy",
    sentences: "Nam dui.",
    email: "ddombrellja@apple.com",
  },
  {
    color: "#d99c7f",
    avatar: "https://robohash.org/etvelfacilis.png?size=50x50&set=set1",
    name: "Maryjane Rabat",
    university: "Mamoun Private University for Science and Technology",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "mrabatjb@furl.net",
  },
  {
    color: "#bf38aa",
    avatar: "https://robohash.org/fugitquivoluptas.png?size=50x50&set=set1",
    name: "Ewell De Carolis",
    university: "Bryant and Stratton College",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    email: "edejc@cocolog-nifty.com",
  },
  {
    color: "#e15930",
    avatar: "https://robohash.org/etauteaque.png?size=50x50&set=set1",
    name: "Richart Hagart",
    university: "Vidyasagar University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "rhagartjd@digg.com",
  },
  {
    color: "#ee3a39",
    avatar: "https://robohash.org/nisiatqueunde.png?size=50x50&set=set1",
    name: "Elsworth Kunrad",
    university: "Aquinas College",
    sentences: "Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    email: "ekunradje@mail.ru",
  },
  {
    color: "#ee2bf2",
    avatar:
      "https://robohash.org/veritatisrationedolor.png?size=50x50&set=set1",
    name: "Sumner Duckels",
    university: "National Central University",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "sduckelsjf@blogspot.com",
  },
  {
    color: "#065587",
    avatar: "https://robohash.org/harumcupiditatesint.png?size=50x50&set=set1",
    name: "Raynell O'Kerin",
    university: "Kuala Terengganu City Polytechnic",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "rokerinjg@usgs.gov",
  },
  {
    color: "#a9ca79",
    avatar: "https://robohash.org/oditaliasquis.png?size=50x50&set=set1",
    name: "Alard Corrin",
    university: "Odessa National Marine University",
    sentences:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    email: "acorrinjh@ezinearticles.com",
  },
  {
    color: "#56bf5b",
    avatar: "https://robohash.org/explicabovitaeex.png?size=50x50&set=set1",
    name: "Jermain Brockley",
    university: "D'Youville College",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "jbrockleyji@hexun.com",
  },
  {
    color: "#c25820",
    avatar: "https://robohash.org/quamquidemipsam.png?size=50x50&set=set1",
    name: "Dinnie Caberas",
    university: "Politeknik Negeri Padang",
    sentences: "Curabitur in libero ut massa volutpat convallis.",
    email: "dcaberasjj@nasa.gov",
  },
  {
    color: "#7be8c4",
    avatar: "https://robohash.org/estsedinventore.png?size=50x50&set=set1",
    name: "Joella Sturman",
    university: "European Graduate School, Media & Communications",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "jsturmanjk@ucsd.edu",
  },
  {
    color: "#9c3dc1",
    avatar: "https://robohash.org/enimrepellendusvelit.png?size=50x50&set=set1",
    name: "Nonna Rickword",
    university: "Universitas Persada Indonesia Y.A.I",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "nrickwordjl@csmonitor.com",
  },
  {
    color: "#61f53d",
    avatar:
      "https://robohash.org/evenietquibusdampossimus.png?size=50x50&set=set1",
    name: "Dominik Heinz",
    university: "Indian Institute of Technology, Madras",
    sentences:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "dheinzjm@webs.com",
  },
  {
    color: "#3a1b21",
    avatar: "https://robohash.org/quisarchitectoaut.png?size=50x50&set=set1",
    name: "Audi Spellicy",
    university: "Grove City College",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "aspellicyjn@wordpress.com",
  },
  {
    color: "#e08b24",
    avatar: "https://robohash.org/omnisaliasnon.png?size=50x50&set=set1",
    name: "Niall Chadbourne",
    university: "Universidad Politécnica de Madrid",
    sentences:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "nchadbournejo@vistaprint.com",
  },
  {
    color: "#dc81ac",
    avatar:
      "https://robohash.org/asperioreseligendiamet.png?size=50x50&set=set1",
    name: "Angy Valerius",
    university: "Université Julius Nyerere Kankan",
    sentences:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "avaleriusjp@google.com",
  },
  {
    color: "#5c6aae",
    avatar: "https://robohash.org/expeditavoluptateest.png?size=50x50&set=set1",
    name: "Bogart Nozzolii",
    university: "College of St. Mary",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "bnozzoliijq@time.com",
  },
  {
    color: "#6409e1",
    avatar: "https://robohash.org/autveniamea.png?size=50x50&set=set1",
    name: "Jaime Metson",
    university: "Menoufia University",
    sentences: "Praesent blandit lacinia erat.",
    email: "jmetsonjr@facebook.com",
  },
  {
    color: "#f3db30",
    avatar:
      "https://robohash.org/repudiandaedoloremqueminima.png?size=50x50&set=set1",
    name: "Gay Freckelton",
    university: "Odessa National Maritime Academy",
    sentences: "Integer ac neque. Duis bibendum.",
    email: "gfreckeltonjs@elpais.com",
  },
  {
    color: "#615787",
    avatar:
      "https://robohash.org/eaqueexexercitationem.png?size=50x50&set=set1",
    name: "Helyn Martignon",
    university: "Université de Skikda",
    sentences:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "hmartignonjt@t.co",
  },
  {
    color: "#89833b",
    avatar:
      "https://robohash.org/cupiditatedistinctioconsequatur.png?size=50x50&set=set1",
    name: "Hillary Corr",
    university: "Beth-El College of Nursing and Health Sciences",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    email: "hcorrju@answers.com",
  },
  {
    color: "#45b1b9",
    avatar:
      "https://robohash.org/voluptatecupiditateea.png?size=50x50&set=set1",
    name: "Monah Asp",
    university: "Tarlac State University",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "maspjv@technorati.com",
  },
  {
    color: "#28ea1c",
    avatar:
      "https://robohash.org/quasireiciendisrecusandae.png?size=50x50&set=set1",
    name: "Nicko Brinkler",
    university: "Karnataka State Open University",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    email: "nbrinklerjw@storify.com",
  },
  {
    color: "#70bdac",
    avatar:
      "https://robohash.org/aliquidmolestiaevoluptas.png?size=50x50&set=set1",
    name: "Elden Nerne",
    university: "University of Indianapolis in Athens",
    sentences: "In congue. Etiam justo.",
    email: "enernejx@nih.gov",
  },
  {
    color: "#d47381",
    avatar: "https://robohash.org/quammollitiaut.png?size=50x50&set=set1",
    name: "Packston Natte",
    university: "Taisho University",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "pnattejy@list-manage.com",
  },
  {
    color: "#45a804",
    avatar: "https://robohash.org/adpossimusnatus.png?size=50x50&set=set1",
    name: "Rayshell McElrath",
    university: "Lawrence University",
    sentences:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "rmcelrathjz@youku.com",
  },
  {
    color: "#97efc3",
    avatar:
      "https://robohash.org/autassumendaprovident.png?size=50x50&set=set1",
    name: "Abbye Wilkin",
    university: "Florida Atlantic University",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "awilkink0@sciencedaily.com",
  },
  {
    color: "#3353e4",
    avatar: "https://robohash.org/officiautvoluptas.png?size=50x50&set=set1",
    name: "Bancroft Glave",
    university: "Isra University",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "bglavek1@mozilla.org",
  },
  {
    color: "#e51181",
    avatar: "https://robohash.org/atquelaboreaut.png?size=50x50&set=set1",
    name: "Kacy Palethorpe",
    university: "Bharathidasan University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "kpalethorpek2@virginia.edu",
  },
  {
    color: "#141533",
    avatar: "https://robohash.org/errorenimesse.png?size=50x50&set=set1",
    name: "Pepito Coney",
    university: "Moldova State Agricultural University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "pconeyk3@census.gov",
  },
  {
    color: "#84f52a",
    avatar: "https://robohash.org/facilisvoluptatema.png?size=50x50&set=set1",
    name: "Tamas O'Cuddie",
    university: "St. Francis Medical Center College of Nursing",
    sentences:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "tocuddiek4@so-net.ne.jp",
  },
  {
    color: "#9cee24",
    avatar:
      "https://robohash.org/numquamquibusdamdicta.png?size=50x50&set=set1",
    name: "Coriss Tyrone",
    university: "Kobe Women's University",
    sentences: "Sed vel enim sit amet nunc viverra dapibus.",
    email: "ctyronek5@ftc.gov",
  },
  {
    color: "#985356",
    avatar:
      "https://robohash.org/eaquevoluptatevoluptatem.png?size=50x50&set=set1",
    name: "Gaspar Becke",
    university: "Université de Sidi-Bel-Abbès (Djillali Liabès)",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "gbeckek6@addtoany.com",
  },
  {
    color: "#a8b1a5",
    avatar: "https://robohash.org/omnisnesciuntrerum.png?size=50x50&set=set1",
    name: "Briggs Teliga",
    university: "Hochschule Coburg",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "bteligak7@networksolutions.com",
  },
  {
    color: "#9f97dd",
    avatar: "https://robohash.org/autprovidenttempore.png?size=50x50&set=set1",
    name: "Ashton Abbotson",
    university: "Trevecca Nazarene University",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "aabbotsonk8@hatena.ne.jp",
  },
  {
    color: "#d0c8da",
    avatar: "https://robohash.org/autmagnivelit.png?size=50x50&set=set1",
    name: "Horatius Crome",
    university: "Huanghe Science & Technology University",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "hcromek9@wiley.com",
  },
  {
    color: "#83355c",
    avatar: "https://robohash.org/doloremqueeumodit.png?size=50x50&set=set1",
    name: "Waneta Keynes",
    university: "Heilongjiang Commercial University",
    sentences:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "wkeyneska@nba.com",
  },
  {
    color: "#92c4e5",
    avatar: "https://robohash.org/reprehenderitnonest.png?size=50x50&set=set1",
    name: "Roma Sellen",
    university: "Culver-Stockton College",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "rsellenkb@vkontakte.ru",
  },
  {
    color: "#0659fd",
    avatar:
      "https://robohash.org/reprehenderitrepellendusofficia.png?size=50x50&set=set1",
    name: "Tallie Scothorn",
    university: "Hiroshima Shudo University",
    sentences:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "tscothornkc@unblog.fr",
  },
  {
    color: "#387e16",
    avatar: "https://robohash.org/idlaboriosamducimus.png?size=50x50&set=set1",
    name: "Amalie Buckham",
    university: "Central Mindanao University",
    sentences: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    email: "abuckhamkd@google.ca",
  },
  {
    color: "#7bf810",
    avatar: "https://robohash.org/quisintvoluptatem.png?size=50x50&set=set1",
    name: "Shannah Barnham",
    university: "Norway's Information Technology University College",
    sentences:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "sbarnhamke@ning.com",
  },
  {
    color: "#469848",
    avatar: "https://robohash.org/delenititemporeeum.png?size=50x50&set=set1",
    name: "Raimondo Ghiron",
    university: "Providence College",
    sentences:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "rghironkf@intel.com",
  },
  {
    color: "#5122c8",
    avatar: "https://robohash.org/sintaccusantiummagni.png?size=50x50&set=set1",
    name: "Corney Desouza",
    university:
      "École Nationale Supérieure d'Ingénieurs de Constructions Aéronautiques",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "cdesouzakg@gnu.org",
  },
  {
    color: "#efaa49",
    avatar: "https://robohash.org/sedremdolor.png?size=50x50&set=set1",
    name: "Sanford Ferraron",
    university: "Universitas Negeri Semarang",
    sentences: "Vivamus tortor.",
    email: "sferraronkh@multiply.com",
  },
  {
    color: "#ae9f9f",
    avatar: "https://robohash.org/asperioressintdolor.png?size=50x50&set=set1",
    name: "Humphrey Castelli",
    university: "Hong Kong University of Science and Technology",
    sentences:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "hcastelliki@reuters.com",
  },
  {
    color: "#5bd5e6",
    avatar: "https://robohash.org/velautsit.png?size=50x50&set=set1",
    name: "Vikki Wratten",
    university: "St. Joseph's College New York",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "vwrattenkj@skyrock.com",
  },
  {
    color: "#21ff5f",
    avatar: "https://robohash.org/rerumeosaccusamus.png?size=50x50&set=set1",
    name: "Carla Sprigg",
    university: "Rheinische Fachhochschule Köln",
    sentences:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "cspriggkk@topsy.com",
  },
  {
    color: "#fb5dbe",
    avatar:
      "https://robohash.org/doloremconsequaturadipisci.png?size=50x50&set=set1",
    name: "Jenilee Moring",
    university: "Isfahan University of Medical Sciences",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "jmoringkl@time.com",
  },
  {
    color: "#0a9ce4",
    avatar: "https://robohash.org/idodioimpedit.png?size=50x50&set=set1",
    name: "Aguste Daniels",
    university: "Balqa Applied University",
    sentences: "Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "adanielskm@apache.org",
  },
  {
    color: "#e5b55a",
    avatar: "https://robohash.org/atvoluptatemmagnam.png?size=50x50&set=set1",
    name: "Felic Willerton",
    university: "Valley View University",
    sentences:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "fwillertonkn@soundcloud.com",
  },
  {
    color: "#d43b11",
    avatar: "https://robohash.org/occaecatiquaefacilis.png?size=50x50&set=set1",
    name: "Valenka Braikenridge",
    university: "University of Ibadan",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "vbraikenridgeko@t.co",
  },
  {
    color: "#14234e",
    avatar: "https://robohash.org/autrepellatdolore.png?size=50x50&set=set1",
    name: "Jesse Elliston",
    university: "Holy Apostles College",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "jellistonkp@sun.com",
  },
  {
    color: "#481763",
    avatar: "https://robohash.org/ipsamquivel.png?size=50x50&set=set1",
    name: "Hillyer Swatton",
    university: "Guru Jambeshwar University",
    sentences:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "hswattonkq@comsenz.com",
  },
  {
    color: "#1f0305",
    avatar:
      "https://robohash.org/etlaboriosamarchitecto.png?size=50x50&set=set1",
    name: "Roby Omand",
    university: "Arthur C Clarke Institute of Modern Technologies",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "romandkr@stanford.edu",
  },
  {
    color: "#8759a0",
    avatar: "https://robohash.org/ettemporafugiat.png?size=50x50&set=set1",
    name: "Patrizius Beadel",
    university: "McMaster University",
    sentences:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "pbeadelks@state.tx.us",
  },
  {
    color: "#69ac04",
    avatar: "https://robohash.org/expeditautab.png?size=50x50&set=set1",
    name: "Hilly Bondar",
    university: "Islamic Azad University, Sowmesara",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "hbondarkt@sourceforge.net",
  },
  {
    color: "#7e2805",
    avatar: "https://robohash.org/animidictaautem.png?size=50x50&set=set1",
    name: "Marijo Slorance",
    university: "Josai International University",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    email: "msloranceku@nifty.com",
  },
  {
    color: "#371bdb",
    avatar:
      "https://robohash.org/consequatursolutasapiente.png?size=50x50&set=set1",
    name: "Kiel Houdhury",
    university: "University of Louisiana at Monroe",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "khoudhurykv@squidoo.com",
  },
  {
    color: "#0c45ee",
    avatar: "https://robohash.org/ipsamerrorsimilique.png?size=50x50&set=set1",
    name: "Hadria Hazelden",
    university: "University of Southern Indiana",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    email: "hhazeldenkw@pagesperso-orange.fr",
  },
  {
    color: "#5bf939",
    avatar: "https://robohash.org/suntquisrerum.png?size=50x50&set=set1",
    name: "Klaus Champagne",
    university: "Chinju National University",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "kchampagnekx@youtu.be",
  },
  {
    color: "#006667",
    avatar: "https://robohash.org/aperiamsintsit.png?size=50x50&set=set1",
    name: "Tove McAdam",
    university: "Barat College",
    sentences:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    email: "tmcadamky@dropbox.com",
  },
  {
    color: "#3b5038",
    avatar: "https://robohash.org/facilisnatuset.png?size=50x50&set=set1",
    name: "Benedetto MacClure",
    university: "Baku State University",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "bmacclurekz@opensource.org",
  },
  {
    color: "#e66e37",
    avatar: "https://robohash.org/doloremlaborefacere.png?size=50x50&set=set1",
    name: "Staci Clementet",
    university: "Arid Agriculture University",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "sclementetl0@eventbrite.com",
  },
  {
    color: "#9dfd71",
    avatar: "https://robohash.org/laborequoeum.png?size=50x50&set=set1",
    name: "Binnie Cawood",
    university: "Kiev School Of Economics",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "bcawoodl1@tinypic.com",
  },
  {
    color: "#91536a",
    avatar: "https://robohash.org/laborumautodio.png?size=50x50&set=set1",
    name: "Mildred Ewebank",
    university: "Michigan Technological University",
    sentences:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "mewebankl2@psu.edu",
  },
  {
    color: "#1dd3dc",
    avatar: "https://robohash.org/quosducimusaut.png?size=50x50&set=set1",
    name: "Kessia Kither",
    university: "Shih Chien University",
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "kkitherl3@disqus.com",
  },
  {
    color: "#726ef6",
    avatar: "https://robohash.org/quiaerroramet.png?size=50x50&set=set1",
    name: "Prinz Lorkins",
    university: "Korea Advanced Institute of Science & Technology",
    sentences:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "plorkinsl4@dagondesign.com",
  },
  {
    color: "#a69a74",
    avatar: "https://robohash.org/quamcorporisnisi.png?size=50x50&set=set1",
    name: "Raphaela Petheridge",
    university: "Albertus Magnus College",
    sentences:
      "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "rpetheridgel5@tumblr.com",
  },
  {
    color: "#b30beb",
    avatar: "https://robohash.org/necessitatibusquiad.png?size=50x50&set=set1",
    name: "Janaya Hambribe",
    university: "Universidad César Vallejo",
    sentences:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    email: "jhambribel6@blogs.com",
  },
  {
    color: "#bad0b1",
    avatar:
      "https://robohash.org/sintaspernaturnesciunt.png?size=50x50&set=set1",
    name: "Hoyt Ranfield",
    university: "Belgorod State Technical University",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "hranfieldl7@indiegogo.com",
  },
  {
    color: "#6f18d3",
    avatar: "https://robohash.org/magnipossimusdolorem.png?size=50x50&set=set1",
    name: "Carling Duhig",
    university: "Alagappa University",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    email: "cduhigl8@about.me",
  },
  {
    color: "#18be46",
    avatar: "https://robohash.org/animitemporea.png?size=50x50&set=set1",
    name: "Andrus Wheelband",
    university: "Free International University of Moldova",
    sentences: "Aenean fermentum.",
    email: "awheelbandl9@google.es",
  },
  {
    color: "#6f4346",
    avatar:
      "https://robohash.org/consequaturtemporafacere.png?size=50x50&set=set1",
    name: "Juieta Jonuzi",
    university: "Graceland College",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "jjonuzila@pinterest.com",
  },
  {
    color: "#eaab7d",
    avatar: "https://robohash.org/debitisquiamolestiae.png?size=50x50&set=set1",
    name: "Oralie Blazevic",
    university: "Modern University for the Humanities",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "oblazeviclb@flickr.com",
  },
  {
    color: "#d4c83c",
    avatar:
      "https://robohash.org/sintquaeratvoluptatibus.png?size=50x50&set=set1",
    name: "Gabrila Czadla",
    university: "Hofstra University",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    email: "gczadlalc@nydailynews.com",
  },
  {
    color: "#747fdb",
    avatar:
      "https://robohash.org/possimusnobismolestiae.png?size=50x50&set=set1",
    name: "Svend Shatliff",
    university: "Thamar University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    email: "sshatliffld@qq.com",
  },
  {
    color: "#4f720c",
    avatar: "https://robohash.org/ipsadoloresab.png?size=50x50&set=set1",
    name: "Bessie Ranklin",
    university: "Yashawantrao Chavan Maharashtra Open University",
    sentences:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    email: "branklinle@quantcast.com",
  },
  {
    color: "#8d5056",
    avatar: "https://robohash.org/ipsaducimusut.png?size=50x50&set=set1",
    name: "Maryellen Peck",
    university: "California College of Podiatric Medicine",
    sentences: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    email: "mpecklf@sina.com.cn",
  },
  {
    color: "#606114",
    avatar: "https://robohash.org/quasnequeaperiam.png?size=50x50&set=set1",
    name: "Antone Betteriss",
    university: "National University of Modern Languages",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "abetterisslg@chicagotribune.com",
  },
  {
    color: "#b3719a",
    avatar: "https://robohash.org/facereetqui.png?size=50x50&set=set1",
    name: "Clerissa Ridpath",
    university: "Chongju National University of Education",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "cridpathlh@hostgator.com",
  },
  {
    color: "#87d109",
    avatar: "https://robohash.org/sedsolutaautem.png?size=50x50&set=set1",
    name: "Lishe Balk",
    university: "Université de la Méditerranée (Aix Marseille II)",
    sentences: "Sed ante. Vivamus tortor.",
    email: "lbalkli@deliciousdays.com",
  },
  {
    color: "#ace9db",
    avatar: "https://robohash.org/iustorerumea.png?size=50x50&set=set1",
    name: "Flossie Perago",
    university: "New Era University",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    email: "fperagolj@webs.com",
  },
  {
    color: "#8691db",
    avatar:
      "https://robohash.org/architectoquaedolores.png?size=50x50&set=set1",
    name: "Gawain Greeves",
    university: "Tokoha Gakuen University",
    sentences:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "ggreeveslk@java.com",
  },
  {
    color: "#390e74",
    avatar:
      "https://robohash.org/reprehenderitmagniconsequuntur.png?size=50x50&set=set1",
    name: "Raymund Brimfield",
    university: "Manhattan College",
    sentences:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "rbrimfieldll@storify.com",
  },
  {
    color: "#8d7d71",
    avatar:
      "https://robohash.org/minimavitaeperferendis.png?size=50x50&set=set1",
    name: "Lil Fenne",
    university: "Wheaton College Massachusetts",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "lfennelm@craigslist.org",
  },
  {
    color: "#f062df",
    avatar:
      "https://robohash.org/perferendisplaceatculpa.png?size=50x50&set=set1",
    name: "Burch Synke",
    university: "Volgograd Medical Academy",
    sentences:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    email: "bsynkeln@unesco.org",
  },
  {
    color: "#8c5663",
    avatar: "https://robohash.org/quiisteiure.png?size=50x50&set=set1",
    name: "Gamaliel Rany",
    university: "Beloit College",
    sentences: "Suspendisse potenti.",
    email: "granylo@washington.edu",
  },
  {
    color: "#6f732c",
    avatar:
      "https://robohash.org/consecteturexcepturimagnam.png?size=50x50&set=set1",
    name: "Osborn Vango",
    university: "University Oil- Gas Ploiesti",
    sentences: "Vivamus in felis eu sapien cursus vestibulum.",
    email: "ovangolp@comsenz.com",
  },
  {
    color: "#02b3b6",
    avatar: "https://robohash.org/etquisnon.png?size=50x50&set=set1",
    name: "Rosemaria Marte",
    university: "Fatima mata national college kollam kerala",
    sentences:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    email: "rmartelq@wikipedia.org",
  },
  {
    color: "#01b7a7",
    avatar: "https://robohash.org/blanditiiscorruptiut.png?size=50x50&set=set1",
    name: "Darn Wilkerson",
    university: "Universidad Nacional de Entre Ríos",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "dwilkersonlr@weibo.com",
  },
  {
    color: "#1a9b8e",
    avatar: "https://robohash.org/magnietiste.png?size=50x50&set=set1",
    name: "Jada Ninotti",
    university: "University of the Faroe Islands",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "jninottils@virginia.edu",
  },
  {
    color: "#b05a56",
    avatar: "https://robohash.org/occaecatieaeveniet.png?size=50x50&set=set1",
    name: "Birgit Michelmore",
    university: "Prince Mohammad Bin Fahd University",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "bmichelmorelt@earthlink.net",
  },
  {
    color: "#0ec7ce",
    avatar: "https://robohash.org/nihilliberovelit.png?size=50x50&set=set1",
    name: "Galven Grint",
    university: "Rezekne Higher School",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "ggrintlu@digg.com",
  },
  {
    color: "#e8e20e",
    avatar: "https://robohash.org/possimusveromaxime.png?size=50x50&set=set1",
    name: "Tracy Sivess",
    university: "Technische Universität Hamburg-Harburg",
    sentences:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    email: "tsivesslv@ifeng.com",
  },
  {
    color: "#2a9b9d",
    avatar: "https://robohash.org/autcommodiaut.png?size=50x50&set=set1",
    name: "Billi Greasty",
    university: "University of New York in Prague",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "bgreastylw@usatoday.com",
  },
  {
    color: "#da048f",
    avatar:
      "https://robohash.org/teneturdolorreprehenderit.png?size=50x50&set=set1",
    name: "Galen Diggle",
    university: "Arellano University",
    sentences:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "gdigglelx@hatena.ne.jp",
  },
  {
    color: "#b96064",
    avatar: "https://robohash.org/illumquoerror.png?size=50x50&set=set1",
    name: "Darbee Loan",
    university: "Inner Mongolia Agricultural University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "dloanly@yellowbook.com",
  },
  {
    color: "#3a0845",
    avatar: "https://robohash.org/utimpeditdolores.png?size=50x50&set=set1",
    name: "Rachael Hendrichs",
    university: "Universidad Nacional de Jujuy",
    sentences: "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    email: "rhendrichslz@webnode.com",
  },
  {
    color: "#e11ce9",
    avatar: "https://robohash.org/ipsammollitialibero.png?size=50x50&set=set1",
    name: "Kirk Fowlds",
    university: "ITT Technical Institute Maitland",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    email: "kfowldsm0@indiegogo.com",
  },
  {
    color: "#e46720",
    avatar: "https://robohash.org/sedrecusandaeaut.png?size=50x50&set=set1",
    name: "Nelli Camplen",
    university: "Universidad Isaac Newton",
    sentences: "Fusce consequat.",
    email: "ncamplenm1@qq.com",
  },
  {
    color: "#92a831",
    avatar: "https://robohash.org/inquaesunt.png?size=50x50&set=set1",
    name: "Abe Mellanby",
    university: "University Goce Delcev",
    sentences: "Sed ante. Vivamus tortor.",
    email: "amellanbym2@thetimes.co.uk",
  },
  {
    color: "#83ad98",
    avatar: "https://robohash.org/voluptatesuntfacere.png?size=50x50&set=set1",
    name: "Bobine Marsh",
    university: "School of Business and Finance",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "bmarshm3@hao123.com",
  },
  {
    color: "#3e9386",
    avatar: "https://robohash.org/corruptisedvel.png?size=50x50&set=set1",
    name: "Cam Pirelli",
    university: "Emmaus Bible College",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "cpirellim4@com.com",
  },
  {
    color: "#a9d2de",
    avatar:
      "https://robohash.org/recusandaedoloremquis.png?size=50x50&set=set1",
    name: "Doy Asty",
    university: "Bogor Agricultural University",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "dastym5@illinois.edu",
  },
  {
    color: "#b18b99",
    avatar: "https://robohash.org/sintetquod.png?size=50x50&set=set1",
    name: "Cherida Gilpin",
    university: "Nkumba University",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "cgilpinm6@jigsy.com",
  },
  {
    color: "#129d6d",
    avatar: "https://robohash.org/etplaceatrerum.png?size=50x50&set=set1",
    name: "Corella Heyball",
    university: "Universiti Malaya",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    email: "cheyballm7@fda.gov",
  },
  {
    color: "#ecc1c1",
    avatar:
      "https://robohash.org/consequaturmagninatus.png?size=50x50&set=set1",
    name: "Elicia Laxton",
    university: "Ecole Nationale d'Architecture",
    sentences: "Proin risus. Praesent lectus.",
    email: "elaxtonm8@simplemachines.org",
  },
  {
    color: "#df650d",
    avatar:
      "https://robohash.org/commodiconsequaturperferendis.png?size=50x50&set=set1",
    name: "Kahaleel O'Feeny",
    university: "ITT Technical Institute Fort Wayne",
    sentences:
      "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    email: "kofeenym9@statcounter.com",
  },
  {
    color: "#9d372b",
    avatar: "https://robohash.org/iddolorumomnis.png?size=50x50&set=set1",
    name: "Meryl McGebenay",
    university: "Raffles University",
    sentences:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "mmcgebenayma@npr.org",
  },
  {
    color: "#f40fad",
    avatar: "https://robohash.org/doloribusearumullam.png?size=50x50&set=set1",
    name: "Deny Downton",
    university: "Ohio University",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    email: "ddowntonmb@reddit.com",
  },
  {
    color: "#e48083",
    avatar: "https://robohash.org/adquamvoluptatem.png?size=50x50&set=set1",
    name: "Merline Comben",
    university: "Ben-Gurion University of the Negev",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "mcombenmc@telegraph.co.uk",
  },
  {
    color: "#0b7077",
    avatar: "https://robohash.org/etvitaeest.png?size=50x50&set=set1",
    name: "Titos Piele",
    university: "University of Mindanao",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "tpielemd@topsy.com",
  },
  {
    color: "#e345c6",
    avatar:
      "https://robohash.org/sitexplicaboveritatis.png?size=50x50&set=set1",
    name: "Gabriell Sinnock",
    university: "Moscow State University of Technology (Stankin)",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "gsinnockme@thetimes.co.uk",
  },
  {
    color: "#c8d53c",
    avatar: "https://robohash.org/debitisomniscumque.png?size=50x50&set=set1",
    name: "Pietrek France",
    university: "Kobe City University of ForeignStudies",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    email: "pfrancemf@sfgate.com",
  },
  {
    color: "#4fb4fa",
    avatar: "https://robohash.org/placeatdebitisnulla.png?size=50x50&set=set1",
    name: "Emili Scrimshaw",
    university: "University College of the Fraser Valley",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "escrimshawmg@huffingtonpost.com",
  },
  {
    color: "#9ea053",
    avatar: "https://robohash.org/doloresofficiisquia.png?size=50x50&set=set1",
    name: "Elka Cumberland",
    university: "Universidad Iberoamericana",
    sentences: "Praesent blandit.",
    email: "ecumberlandmh@buzzfeed.com",
  },
  {
    color: "#cc3dc0",
    avatar: "https://robohash.org/dolorumnonaut.png?size=50x50&set=set1",
    name: "Celestyna Barrott",
    university: "University of Maribor",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "cbarrottmi@howstuffworks.com",
  },
  {
    color: "#ac8320",
    avatar: "https://robohash.org/expeditasintet.png?size=50x50&set=set1",
    name: "Yurik Eayrs",
    university: "Imam Sadiq University",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "yeayrsmj@canalblog.com",
  },
  {
    color: "#29239b",
    avatar: "https://robohash.org/ipsamassumendaquae.png?size=50x50&set=set1",
    name: "Che Adne",
    university: "University of Insurance and Banking in Warsaw",
    sentences:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    email: "cadnemk@businesswire.com",
  },
  {
    color: "#4e9615",
    avatar: "https://robohash.org/estaccusamusquis.png?size=50x50&set=set1",
    name: "Arman Helkin",
    university: "Universidad Tecnológica del Peru",
    sentences:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "ahelkinml@qq.com",
  },
  {
    color: "#460abc",
    avatar: "https://robohash.org/undeullamvelit.png?size=50x50&set=set1",
    name: "Daffie Mityushin",
    university: "Aria Institute of Higher Education",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "dmityushinmm@wufoo.com",
  },
  {
    color: "#2c5800",
    avatar: "https://robohash.org/situtconsectetur.png?size=50x50&set=set1",
    name: "Carilyn Dimelow",
    university: "Institute of Teachers Education, Ipoh",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "cdimelowmn@businessweek.com",
  },
  {
    color: "#9cd128",
    avatar: "https://robohash.org/accusamusquiaatque.png?size=50x50&set=set1",
    name: "Shalom Kintzel",
    university: "National American University, Kansas City",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    email: "skintzelmo@auda.org.au",
  },
  {
    color: "#bc7b8d",
    avatar: "https://robohash.org/quiaquaeasperiores.png?size=50x50&set=set1",
    name: "Kincaid Tatershall",
    university: "Elmhurst College",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "ktatershallmp@google.ru",
  },
  {
    color: "#b59470",
    avatar: "https://robohash.org/cumqueipsamfacere.png?size=50x50&set=set1",
    name: "Barbabra Lauchlan",
    university: "Aichi Gakusen University",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "blauchlanmq@un.org",
  },
  {
    color: "#af5716",
    avatar: "https://robohash.org/quisutpariatur.png?size=50x50&set=set1",
    name: "Chrystel Stallon",
    university: "Institut National Polytechnique de Lorraine",
    sentences:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "cstallonmr@samsung.com",
  },
  {
    color: "#6fd412",
    avatar:
      "https://robohash.org/delectusetpraesentium.png?size=50x50&set=set1",
    name: "Warner McGannon",
    university: "Ibaraki Christian College",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "wmcgannonms@ycombinator.com",
  },
  {
    color: "#29709f",
    avatar: "https://robohash.org/autdistinctiovel.png?size=50x50&set=set1",
    name: "Clara Borer",
    university: "Touro College",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "cborermt@shinystat.com",
  },
  {
    color: "#572738",
    avatar:
      "https://robohash.org/dolorempossimusconsequuntur.png?size=50x50&set=set1",
    name: "Marybelle Kentwell",
    university: "Wakkanai Hokusei Gakuen University",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "mkentwellmu@wp.com",
  },
  {
    color: "#5bfd23",
    avatar: "https://robohash.org/quiaaconsequatur.png?size=50x50&set=set1",
    name: "Ricardo Monteath",
    university: "University of Cambridge",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    email: "rmonteathmv@nyu.edu",
  },
  {
    color: "#b32974",
    avatar: "https://robohash.org/ipsumnamqui.png?size=50x50&set=set1",
    name: "Deedee Retchford",
    university: "Greenwich University",
    sentences: "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "dretchfordmw@tinyurl.com",
  },
  {
    color: "#e86813",
    avatar: "https://robohash.org/namhicconsequatur.png?size=50x50&set=set1",
    name: "Eolande Stark",
    university: "Milwaukee Institute of Art and Design",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "estarkmx@alibaba.com",
  },
  {
    color: "#2fbd6a",
    avatar: "https://robohash.org/quidemnequevelit.png?size=50x50&set=set1",
    name: "Aggie Vecard",
    university: "Vladimir State University",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "avecardmy@google.fr",
  },
  {
    color: "#8be501",
    avatar:
      "https://robohash.org/perspiciatisplaceatsint.png?size=50x50&set=set1",
    name: "Olenolin Batterson",
    university: "Royal lnstitute of Technology",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "obattersonmz@earthlink.net",
  },
  {
    color: "#ee05b7",
    avatar: "https://robohash.org/utiureiste.png?size=50x50&set=set1",
    name: "Artair Lavielle",
    university: "Universidade Independente de Angola",
    sentences:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "alaviellen0@jigsy.com",
  },
  {
    color: "#1fe426",
    avatar: "https://robohash.org/autetvero.png?size=50x50&set=set1",
    name: "Moselle Kemme",
    university: "Ohio State University - Mansfield",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "mkemmen1@google.it",
  },
  {
    color: "#56c3c2",
    avatar: "https://robohash.org/eligendidoloremrem.png?size=50x50&set=set1",
    name: "Fletch Rider",
    university: "California State University, Los Angeles",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "fridern2@go.com",
  },
  {
    color: "#1cd53e",
    avatar: "https://robohash.org/odiosequiet.png?size=50x50&set=set1",
    name: "Willette Prue",
    university: "Hochschule Mittweida (FH)",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "wpruen3@stanford.edu",
  },
  {
    color: "#e83116",
    avatar:
      "https://robohash.org/repudiandaecumvoluptatum.png?size=50x50&set=set1",
    name: "Jillian Coram",
    university: "University of Abuja",
    sentences: "Aenean auctor gravida sem.",
    email: "jcoramn4@rediff.com",
  },
  {
    color: "#327647",
    avatar:
      "https://robohash.org/nonreprehenderitasperiores.png?size=50x50&set=set1",
    name: "Neron Orbell",
    university: "Universitas Sebelas Maret",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "norbelln5@hud.gov",
  },
  {
    color: "#13b999",
    avatar: "https://robohash.org/nihilsequivelit.png?size=50x50&set=set1",
    name: "Kali Frissell",
    university: "McGill University",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "kfrisselln6@about.com",
  },
  {
    color: "#633b58",
    avatar:
      "https://robohash.org/aspernaturexpeditaitaque.png?size=50x50&set=set1",
    name: "Domenic Jedraszczyk",
    university: "Soongsil University",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "djedraszczykn7@ca.gov",
  },
  {
    color: "#187eb5",
    avatar: "https://robohash.org/estatea.png?size=50x50&set=set1",
    name: "Ximenes Kinghorn",
    university: "South East European University",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "xkinghornn8@go.com",
  },
  {
    color: "#ee4b91",
    avatar: "https://robohash.org/perspiciatisautquia.png?size=50x50&set=set1",
    name: "Bronny Chaunce",
    university: "Bicol University",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "bchauncen9@opensource.org",
  },
  {
    color: "#e48b68",
    avatar: "https://robohash.org/rationedolorumculpa.png?size=50x50&set=set1",
    name: "Mirabella Oldroyde",
    university: "Kocaeli University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "moldroydena@de.vu",
  },
  {
    color: "#a90257",
    avatar: "https://robohash.org/laboremagniofficia.png?size=50x50&set=set1",
    name: "Waldon Chapling",
    university: "National Kaohsiung University of Applied Sciences",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "wchaplingnb@xing.com",
  },
  {
    color: "#469829",
    avatar:
      "https://robohash.org/nihilasperiorestempora.png?size=50x50&set=set1",
    name: "Jojo Klezmski",
    university: "Tecnologico de Baja California, Universidad",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "jklezmskinc@dropbox.com",
  },
  {
    color: "#16328d",
    avatar: "https://robohash.org/ullamtemporasint.png?size=50x50&set=set1",
    name: "Rosemonde Stangroom",
    university: "Faculdade Italo Brasileira",
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "rstangroomnd@rakuten.co.jp",
  },
  {
    color: "#8f1752",
    avatar: "https://robohash.org/quisvelhic.png?size=50x50&set=set1",
    name: "Margi Dibben",
    university: "St. Anselm College",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "mdibbenne@imageshack.us",
  },
  {
    color: "#556a98",
    avatar: "https://robohash.org/estetincidunt.png?size=50x50&set=set1",
    name: "Ritchie Dumphries",
    university: "Shaoguan University",
    sentences: "Vivamus tortor. Duis mattis egestas metus.",
    email: "rdumphriesnf@springer.com",
  },
  {
    color: "#6e017b",
    avatar: "https://robohash.org/enimutquae.png?size=50x50&set=set1",
    name: "Haywood MacCaull",
    university: "University of California, Oakland",
    sentences:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "hmaccaullng@abc.net.au",
  },
  {
    color: "#724e63",
    avatar: "https://robohash.org/blanditiisidanimi.png?size=50x50&set=set1",
    name: "Cam Giscken",
    university: "Universidad Experimental Felix Adam",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    email: "cgisckennh@narod.ru",
  },
  {
    color: "#ebc0d9",
    avatar: "https://robohash.org/delectusveniamenim.png?size=50x50&set=set1",
    name: "Tobit Stribbling",
    university: "Simpson College",
    sentences: "Maecenas pulvinar lobortis est.",
    email: "tstribblingni@sohu.com",
  },
  {
    color: "#f3aaf8",
    avatar: "https://robohash.org/estadeum.png?size=50x50&set=set1",
    name: "Elden Bispham",
    university: "Shanxi Agricultural University",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "ebisphamnj@guardian.co.uk",
  },
  {
    color: "#9bdb16",
    avatar: "https://robohash.org/utfugitpossimus.png?size=50x50&set=set1",
    name: "Kain Balderstone",
    university: "Baldwin-Wallace College",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "kbalderstonenk@gmpg.org",
  },
  {
    color: "#b7c09b",
    avatar: "https://robohash.org/repellendusporrohic.png?size=50x50&set=set1",
    name: "Reggy Scoullar",
    university: "Maxim Gorky Institute of Literature",
    sentences:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "rscoullarnl@kickstarter.com",
  },
  {
    color: "#b0f07e",
    avatar:
      "https://robohash.org/necessitatibusnemoveniam.png?size=50x50&set=set1",
    name: "Gale Spragge",
    university:
      "Ho Chi Minh City University of Foreign Languages and Information Technology",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    email: "gspraggenm@facebook.com",
  },
  {
    color: "#af86f5",
    avatar: "https://robohash.org/voluptatemhicdolores.png?size=50x50&set=set1",
    name: "Jammal Falck",
    university: "Free University Stockholm",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "jfalcknn@furl.net",
  },
  {
    color: "#bfd395",
    avatar: "https://robohash.org/hicautemsimilique.png?size=50x50&set=set1",
    name: "Alvy Keming",
    university: "International University of Kyrgyzstan",
    sentences:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    email: "akemingno@angelfire.com",
  },
  {
    color: "#fb56c7",
    avatar: "https://robohash.org/etautut.png?size=50x50&set=set1",
    name: "Wendi Hurburt",
    university: "Sheffield Hallam University",
    sentences:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    email: "whurburtnp@go.com",
  },
  {
    color: "#cab3c9",
    avatar: "https://robohash.org/modimolestiaeaut.png?size=50x50&set=set1",
    name: "Corie Southerden",
    university: "Universidad CAECE, Buenos Aires",
    sentences:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    email: "csoutherdennq@wordpress.org",
  },
  {
    color: "#b2230c",
    avatar: "https://robohash.org/utquasrepellat.png?size=50x50&set=set1",
    name: "Clementine Beswick",
    university: "Jahrom University of Medical Sciences",
    sentences: "In congue. Etiam justo.",
    email: "cbeswicknr@fc2.com",
  },
  {
    color: "#801f90",
    avatar: "https://robohash.org/cumqueestvoluptates.png?size=50x50&set=set1",
    name: "Ryon Khan",
    university: "Institut des Sciences de la Matière et du Rayonnement",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    email: "rkhanns@ocn.ne.jp",
  },
  {
    color: "#ee111d",
    avatar: "https://robohash.org/quiaquianihil.png?size=50x50&set=set1",
    name: "Nert Salomon",
    university: "Bugema University",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "nsalomonnt@canalblog.com",
  },
  {
    color: "#a39e8c",
    avatar: "https://robohash.org/enimataccusantium.png?size=50x50&set=set1",
    name: "Jeanne Casseldine",
    university: "Universidade Federal de Mato Grosso",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "jcasseldinenu@eepurl.com",
  },
  {
    color: "#2fc625",
    avatar: "https://robohash.org/doloremundevelit.png?size=50x50&set=set1",
    name: "Gustavus Barens",
    university: "Wichita State University",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    email: "gbarensnv@discovery.com",
  },
  {
    color: "#f72735",
    avatar: "https://robohash.org/corporisnonquasi.png?size=50x50&set=set1",
    name: "Paulie Tilling",
    university: "Goa University",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    email: "ptillingnw@admin.ch",
  },
  {
    color: "#227997",
    avatar: "https://robohash.org/perferendisautquia.png?size=50x50&set=set1",
    name: "Cyrus Rosberg",
    university: "Neumann College",
    sentences:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "crosbergnx@mashable.com",
  },
  {
    color: "#547590",
    avatar:
      "https://robohash.org/enimofficiisquibusdam.png?size=50x50&set=set1",
    name: "Reginald Filipputti",
    university: "Fudan University",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "rfilipputtiny@webnode.com",
  },
  {
    color: "#70bf37",
    avatar:
      "https://robohash.org/aliasconsequaturaperiam.png?size=50x50&set=set1",
    name: "Liliane Sarfas",
    university: "Islamic Azad University, North Tehran",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    email: "lsarfasnz@samsung.com",
  },
  {
    color: "#955e85",
    avatar: "https://robohash.org/remsedveniam.png?size=50x50&set=set1",
    name: "Der Sinfield",
    university: "National Defense University",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    email: "dsinfieldo0@mlb.com",
  },
  {
    color: "#db83b2",
    avatar: "https://robohash.org/molestiaesuntet.png?size=50x50&set=set1",
    name: "Ardelia Suttle",
    university: "Université de Kamina",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    email: "asuttleo1@deviantart.com",
  },
  {
    color: "#a2baa7",
    avatar: "https://robohash.org/quicumvoluptatem.png?size=50x50&set=set1",
    name: "Othello Filipowicz",
    university: 'University of Vlora "Ismail Qemali"',
    sentences:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    email: "ofilipowiczo2@acquirethisname.com",
  },
  {
    color: "#93614e",
    avatar: "https://robohash.org/molestiaequistempore.png?size=50x50&set=set1",
    name: "Shane Chislett",
    university: "Chengdu University of Traditional Chinese Medicine",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "schisletto3@prweb.com",
  },
  {
    color: "#39382e",
    avatar: "https://robohash.org/maximequoex.png?size=50x50&set=set1",
    name: "Elvyn Bog",
    university: "Kyorin University",
    sentences:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    email: "ebogo4@tuttocitta.it",
  },
  {
    color: "#c2cdc4",
    avatar: "https://robohash.org/delectusdoloresut.png?size=50x50&set=set1",
    name: "Matty Flay",
    university: "Universidad Centro Occidental Lisandro Alvarado",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "mflayo5@cocolog-nifty.com",
  },
  {
    color: "#597956",
    avatar: "https://robohash.org/dolornihilet.png?size=50x50&set=set1",
    name: "Cherye Matczak",
    university: "Quincy University",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "cmatczako6@google.nl",
  },
  {
    color: "#aaa546",
    avatar: "https://robohash.org/culpaipsamea.png?size=50x50&set=set1",
    name: "Sheffie Spittle",
    university: "Tel Aviv University",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "sspittleo7@archive.org",
  },
  {
    color: "#14632c",
    avatar: "https://robohash.org/idestdicta.png?size=50x50&set=set1",
    name: "Everett Fawcus",
    university: "Kansai University",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "efawcuso8@vkontakte.ru",
  },
  {
    color: "#5e3128",
    avatar: "https://robohash.org/corporisquasised.png?size=50x50&set=set1",
    name: "Toddy Rhyme",
    university: "Theologische Hochschule Friedensau",
    sentences:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    email: "trhymeo9@slate.com",
  },
  {
    color: "#532d80",
    avatar:
      "https://robohash.org/quibusdammodinesciunt.png?size=50x50&set=set1",
    name: "Meredeth Stoffer",
    university: "The University of Nottingham Ningbo China",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    email: "mstofferoa@quantcast.com",
  },
  {
    color: "#e042dd",
    avatar: "https://robohash.org/remquoad.png?size=50x50&set=set1",
    name: "Skelly Fulep",
    university: "Universidad Braulio Carrillo",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    email: "sfulepob@booking.com",
  },
  {
    color: "#4885fd",
    avatar: "https://robohash.org/deseruntearumaut.png?size=50x50&set=set1",
    name: "Jonis McNirlin",
    university: "University of Bristol",
    sentences:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    email: "jmcnirlinoc@github.io",
  },
  {
    color: "#c7dd7e",
    avatar: "https://robohash.org/autmaioresvoluptatem.png?size=50x50&set=set1",
    name: "Mirella Gillbe",
    university: "European School of Economics",
    sentences:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    email: "mgillbeod@nba.com",
  },
  {
    color: "#50a7fa",
    avatar:
      "https://robohash.org/occaecaticupiditatemagni.png?size=50x50&set=set1",
    name: "Frank Dewes",
    university: "Laikipia University",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    email: "fdewesoe@redcross.org",
  },
  {
    color: "#231ecf",
    avatar:
      "https://robohash.org/deseruntquiaexplicabo.png?size=50x50&set=set1",
    name: "Heather Bixley",
    university: "Chukyo Gakuin University",
    sentences:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    email: "hbixleyof@bravesites.com",
  },
  {
    color: "#baf51c",
    avatar: "https://robohash.org/ametautemdolor.png?size=50x50&set=set1",
    name: "Janella Inston",
    university: "Universidade Federal da Paraíba",
    sentences:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    email: "jinstonog@gov.uk",
  },
  {
    color: "#efcd0c",
    avatar:
      "https://robohash.org/facilisaspernaturquasi.png?size=50x50&set=set1",
    name: "Gill Whetton",
    university: "Universidad Católica de Salta",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "gwhettonoh@epa.gov",
  },
  {
    color: "#a76b45",
    avatar: "https://robohash.org/idoditsint.png?size=50x50&set=set1",
    name: "Mignonne Lytlle",
    university: "Waterford Institute Of Technology",
    sentences:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    email: "mlytlleoi@wordpress.org",
  },
  {
    color: "#bb516a",
    avatar:
      "https://robohash.org/occaecatiquisquamquos.png?size=50x50&set=set1",
    name: "Bryn Mathie",
    university: "Universidad de Alcalá de Henares",
    sentences:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "bmathieoj@uiuc.edu",
  },
  {
    color: "#62b4b8",
    avatar: "https://robohash.org/magnamsimiliquesit.png?size=50x50&set=set1",
    name: "Leroi Lilley",
    university: "Universidad de Morón",
    sentences:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "llilleyok@wix.com",
  },
  {
    color: "#1f270f",
    avatar: "https://robohash.org/nihilutaliquid.png?size=50x50&set=set1",
    name: "Tiena Clohissy",
    university: "College of St. Mary",
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "tclohissyol@t.co",
  },
  {
    color: "#f0ea4e",
    avatar: "https://robohash.org/quiaadipisciea.png?size=50x50&set=set1",
    name: "Peggie Dunks",
    university: "Universidad Nacional Agraria La Selva",
    sentences: "Donec semper sapien a libero.",
    email: "pdunksom@army.mil",
  },
  {
    color: "#20a3fa",
    avatar: "https://robohash.org/quisvelqui.png?size=50x50&set=set1",
    name: "Lolly Jeeks",
    university: "University of La Verne",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "ljeekson@taobao.com",
  },
  {
    color: "#cbc0eb",
    avatar: "https://robohash.org/idveniamconsequatur.png?size=50x50&set=set1",
    name: "Corney Yukhnin",
    university: "University of Massachusetts at Boston",
    sentences:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    email: "cyukhninoo@about.me",
  },
  {
    color: "#a0d0d5",
    avatar: "https://robohash.org/repudiandaeetrerum.png?size=50x50&set=set1",
    name: "Spense Stittle",
    university: "Universidad Mesoamericana de San Agustín",
    sentences:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "sstittleop@merriam-webster.com",
  },
  {
    color: "#820767",
    avatar: "https://robohash.org/iureexrepudiandae.png?size=50x50&set=set1",
    name: "Codi Barrus",
    university: "Centro Universitario Ixtlahuaca",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "cbarrusoq@shutterfly.com",
  },
  {
    color: "#528187",
    avatar:
      "https://robohash.org/placeatnecessitatibusaut.png?size=50x50&set=set1",
    name: "Ara Redshaw",
    university: "Torbat Heydarieh University of Medical Sciences",
    sentences:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    email: "aredshawor@ftc.gov",
  },
  {
    color: "#2a1236",
    avatar: "https://robohash.org/sednemosed.png?size=50x50&set=set1",
    name: "Nannette Sixsmith",
    university: "Universitas Sarjanawiyata Tamansiswa",
    sentences:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    email: "nsixsmithos@skype.com",
  },
  {
    color: "#138ac2",
    avatar:
      "https://robohash.org/voluptatibusnecessitatibuseos.png?size=50x50&set=set1",
    name: "Cathe Bauldrey",
    university: "Gazi University Ankara",
    sentences:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "cbauldreyot@odnoklassniki.ru",
  },
  {
    color: "#429d8f",
    avatar: "https://robohash.org/aliquaminciduntsed.png?size=50x50&set=set1",
    name: "Evangelina Gwinnell",
    university: "Benadir University",
    sentences: "In sagittis dui vel nisl.",
    email: "egwinnellou@ebay.com",
  },
  {
    color: "#cbcf6a",
    avatar: "https://robohash.org/estundelaudantium.png?size=50x50&set=set1",
    name: "Catie Airs",
    university: "The Catholic University of America",
    sentences:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    email: "cairsov@dion.ne.jp",
  },
  {
    color: "#c0ecb5",
    avatar: "https://robohash.org/estutqui.png?size=50x50&set=set1",
    name: "Jesselyn Saby",
    university: "International Ataturk Alatoo University",
    sentences:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "jsabyow@example.com",
  },
  {
    color: "#82f17c",
    avatar: "https://robohash.org/utsapientefuga.png?size=50x50&set=set1",
    name: "Dietrich Stedson",
    university: "Universidad de América Bogotá",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "dstedsonox@people.com.cn",
  },
  {
    color: "#6ec090",
    avatar: "https://robohash.org/etestat.png?size=50x50&set=set1",
    name: "Cordie Morrieson",
    university: "Universitas Mahendradatta",
    sentences:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    email: "cmorriesonoy@prweb.com",
  },
  {
    color: "#5e990d",
    avatar: "https://robohash.org/saepeatqueexpedita.png?size=50x50&set=set1",
    name: "Ches Dye",
    university: "Central Philippine University",
    sentences:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    email: "cdyeoz@chronoengine.com",
  },
  {
    color: "#371209",
    avatar: "https://robohash.org/itaqueconsequaturest.png?size=50x50&set=set1",
    name: "Addia Linney",
    university:
      "Ecole Spéciale des Travaux Publics du Bâtiment et de l'Industrie",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    email: "alinneyp0@cornell.edu",
  },
  {
    color: "#340c8f",
    avatar: "https://robohash.org/utnonquod.png?size=50x50&set=set1",
    name: "Davida Reisin",
    university: "Maldives National University",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    email: "dreisinp1@loc.gov",
  },
  {
    color: "#883841",
    avatar: "https://robohash.org/estomnisblanditiis.png?size=50x50&set=set1",
    name: "Donalt Zoephel",
    university: "Brussels Management School (ICHEC)",
    sentences:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "dzoephelp2@youtube.com",
  },
  {
    color: "#f47d40",
    avatar:
      "https://robohash.org/aliasconsequaturveniam.png?size=50x50&set=set1",
    name: "Xylina Fardon",
    university: "University of Medicine Magway",
    sentences:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    email: "xfardonp3@a8.net",
  },
  {
    color: "#d5c0c9",
    avatar: "https://robohash.org/evenietutunde.png?size=50x50&set=set1",
    name: "Carlynne Aberdeen",
    university: "Tashkent Islam University",
    sentences:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "caberdeenp4@msu.edu",
  },
  {
    color: "#25f1a1",
    avatar: "https://robohash.org/idautquo.png?size=50x50&set=set1",
    name: "Melba Gorthy",
    university: "Ecole Nationale Supérieure Electricité et Mécanique",
    sentences:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    email: "mgorthyp5@diigo.com",
  },
  {
    color: "#870029",
    avatar: "https://robohash.org/distinctioestquo.png?size=50x50&set=set1",
    name: "Farley Bladge",
    university: "California State Polytechnic University - Pomona",
    sentences:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    email: "fbladgep6@paypal.com",
  },
  {
    color: "#8c8ab6",
    avatar: "https://robohash.org/exodiosaepe.png?size=50x50&set=set1",
    name: "Orland Laurenceau",
    university: "Shenyang Pharmaceutical University",
    sentences:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "olaurenceaup7@51.la",
  },
  {
    color: "#fdb7d3",
    avatar: "https://robohash.org/atetatque.png?size=50x50&set=set1",
    name: "Auria Mathivat",
    university: "Illinois College",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    email: "amathivatp8@bluehost.com",
  },
  {
    color: "#187dab",
    avatar:
      "https://robohash.org/laudantiumquisquamporro.png?size=50x50&set=set1",
    name: "Karin Fearnill",
    university: "Nippon Institute of Technology",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "kfearnillp9@dell.com",
  },
  {
    color: "#8f7867",
    avatar: "https://robohash.org/dolorumutmolestiae.png?size=50x50&set=set1",
    name: "Madlen De Pero",
    university: "Sun Yat-Sen University of Medical Sciences",
    sentences:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "mdepa@google.com.br",
  },
  {
    color: "#43ec4d",
    avatar: "https://robohash.org/reprehenderitinnatus.png?size=50x50&set=set1",
    name: "Ardelia Donavan",
    university: "Roanoke Bible College",
    sentences:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    email: "adonavanpb@biblegateway.com",
  },
  {
    color: "#daef84",
    avatar: "https://robohash.org/numquamblanditiisest.png?size=50x50&set=set1",
    name: "Jaymie Rastrick",
    university:
      "Finch University of Health Sciences - The Chicago Medical School",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    email: "jrastrickpc@biglobe.ne.jp",
  },
  {
    color: "#1a6d5f",
    avatar: "https://robohash.org/assumendaeosquod.png?size=50x50&set=set1",
    name: "Elora Oventon",
    university: "University of Bahrain",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    email: "eoventonpd@shareasale.com",
  },
  {
    color: "#94046a",
    avatar: "https://robohash.org/ducimusutquo.png?size=50x50&set=set1",
    name: "Karlee De Rye Barrett",
    university: "Universidad Privada del Valle",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "kdepe@abc.net.au",
  },
  {
    color: "#361cf6",
    avatar: "https://robohash.org/nonenimfuga.png?size=50x50&set=set1",
    name: "Ree Sewill",
    university: "Queens College",
    sentences:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    email: "rsewillpf@usatoday.com",
  },
  {
    color: "#42f8bc",
    avatar:
      "https://robohash.org/aperiamdistinctiofugit.png?size=50x50&set=set1",
    name: "Dorena O'Mailey",
    university: "Paktia University",
    sentences:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "domaileypg@ocn.ne.jp",
  },
  {
    color: "#efdd56",
    avatar: "https://robohash.org/voluptatumestvel.png?size=50x50&set=set1",
    name: "Barrie Doerr",
    university:
      "Universidade Regional do Noroeste do Estado do Rio Grande do Sul",
    sentences:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    email: "bdoerrph@virginia.edu",
  },
  {
    color: "#41286c",
    avatar: "https://robohash.org/odioestperspiciatis.png?size=50x50&set=set1",
    name: "Cyb Faire",
    university: "College of Telecommunication & Information ",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "cfairepi@themeforest.net",
  },
  {
    color: "#cd8c36",
    avatar: "https://robohash.org/quiitaquea.png?size=50x50&set=set1",
    name: "Caleb Hoggan",
    university: "Oklahoma State University - Institute of Technology",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    email: "chogganpj@elegantthemes.com",
  },
  {
    color: "#755488",
    avatar:
      "https://robohash.org/minimaasperioresbeatae.png?size=50x50&set=set1",
    name: "Standford Schriren",
    university: "Baghyatoolah Medical Sciences University",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "sschrirenpk@merriam-webster.com",
  },
  {
    color: "#a7e8f8",
    avatar: "https://robohash.org/minusquiatenetur.png?size=50x50&set=set1",
    name: "Hammad Fozard",
    university: "Colorado School of Mines",
    sentences:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    email: "hfozardpl@home.pl",
  },
  {
    color: "#e9042d",
    avatar:
      "https://robohash.org/enimimpeditreprehenderit.png?size=50x50&set=set1",
    name: "Benni Kopfer",
    university: "Toho Gakuen School of Music",
    sentences: "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    email: "bkopferpm@cnbc.com",
  },
  {
    color: "#734843",
    avatar:
      "https://robohash.org/dolorumlaborumdignissimos.png?size=50x50&set=set1",
    name: "Arabel Humbert",
    university:
      "Universidad de la Fraternidad de Agrupaciones Santo Tomas de Aquino (FASTA)",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "ahumbertpn@vk.com",
  },
  {
    color: "#ad6689",
    avatar: "https://robohash.org/consecteturdolorquia.png?size=50x50&set=set1",
    name: "Tuckie Rogerot",
    university: "ITT Technical Institute West Covina",
    sentences:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    email: "trogerotpo@phpbb.com",
  },
  {
    color: "#0aad8b",
    avatar:
      "https://robohash.org/voluptatesarchitectoenim.png?size=50x50&set=set1",
    name: "Hadlee Nowick",
    university: "Maritime University in Szczecin",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    email: "hnowickpp@hugedomains.com",
  },
  {
    color: "#22aafb",
    avatar:
      "https://robohash.org/perferendisducimusfuga.png?size=50x50&set=set1",
    name: "Shela Bracher",
    university: "Russell Berrie Nanotechnology Institute",
    sentences:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    email: "sbracherpq@ovh.net",
  },
  {
    color: "#89a64c",
    avatar: "https://robohash.org/distinctioporroipsum.png?size=50x50&set=set1",
    name: "Rosaline Riolfo",
    university: "Jimma University",
    sentences:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    email: "rriolfopr@arstechnica.com",
  },
  {
    color: "#8d7ff2",
    avatar:
      "https://robohash.org/illodelenitiexplicabo.png?size=50x50&set=set1",
    name: "Gabrila Covelle",
    university: "Hanoi University of Science & Technology",
    sentences: "Praesent lectus.",
    email: "gcovelleps@mit.edu",
  },
  {
    color: "#ba66bb",
    avatar: "https://robohash.org/oditquosvoluptates.png?size=50x50&set=set1",
    name: "Alick Bahia",
    university: "University of Stellenbosch",
    sentences:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "abahiapt@live.com",
  },
  {
    color: "#c866e2",
    avatar: "https://robohash.org/eumnonexercitationem.png?size=50x50&set=set1",
    name: "Barron Crathorne",
    university: "Montreat College",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "bcrathornepu@clickbank.net",
  },
  {
    color: "#337873",
    avatar: "https://robohash.org/molestiasquiin.png?size=50x50&set=set1",
    name: "Delmar Bertie",
    university: "Skyline University College, Sharjah",
    sentences:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "dbertiepv@patch.com",
  },
  {
    color: "#2e9b59",
    avatar:
      "https://robohash.org/quomolestiaevoluptate.png?size=50x50&set=set1",
    name: "Orion Bolles",
    university: "Upper Nile University",
    sentences:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    email: "obollespw@hibu.com",
  },
  {
    color: "#d84fee",
    avatar:
      "https://robohash.org/aperiamvoluptatibusut.png?size=50x50&set=set1",
    name: "Anne Poat",
    university:
      "Asia Pacific Institute of Information Technology Pakistan (APIIT PAK)",
    sentences:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    email: "apoatpx@boston.com",
  },
  {
    color: "#9fc5ca",
    avatar: "https://robohash.org/etquaesit.png?size=50x50&set=set1",
    name: "Kyla Admans",
    university: "Drew University",
    sentences:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    email: "kadmanspy@usgs.gov",
  },
  {
    color: "#55e84b",
    avatar: "https://robohash.org/addoloraccusamus.png?size=50x50&set=set1",
    name: "Mordy Wilsey",
    university: "North Island College",
    sentences:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    email: "mwilseypz@artisteer.com",
  },
  {
    color: "#07414c",
    avatar:
      "https://robohash.org/molestiaeconsequaturquidem.png?size=50x50&set=set1",
    name: "Charmian Veighey",
    university: "Universidad INCCA de Colombia",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    email: "cveigheyq0@opera.com",
  },
  {
    color: "#8e7827",
    avatar: "https://robohash.org/eiusaliquidmollitia.png?size=50x50&set=set1",
    name: "Meredithe Benallack",
    university: "Barkatullah University",
    sentences:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    email: "mbenallackq1@1688.com",
  },
  {
    color: "#9da781",
    avatar:
      "https://robohash.org/voluptatumfacilisdistinctio.png?size=50x50&set=set1",
    name: "Northrup Crohan",
    university: "Kannur University",
    sentences:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    email: "ncrohanq2@jalbum.net",
  },
  {
    color: "#02434c",
    avatar: "https://robohash.org/sedutconsequatur.png?size=50x50&set=set1",
    name: "Alaster Coultous",
    university: "Fort Lewis College",
    sentences: "Duis aliquam convallis nunc.",
    email: "acoultousq3@sakura.ne.jp",
  },
  {
    color: "#10ee41",
    avatar:
      "https://robohash.org/quivoluptatemcupiditate.png?size=50x50&set=set1",
    name: "Vita Sybe",
    university: "Universidad Autónoma Juan Misael Saracho",
    sentences:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    email: "vsybeq4@wiley.com",
  },
  {
    color: "#29e163",
    avatar: "https://robohash.org/nemoestet.png?size=50x50&set=set1",
    name: "Ella Fehners",
    university: "Tay Nguyen University",
    sentences:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "efehnersq5@narod.ru",
  },
  {
    color: "#c140cc",
    avatar:
      "https://robohash.org/accusantiumomnismaiores.png?size=50x50&set=set1",
    name: "Arron Escale",
    university: "Evangelische Theologische Faculteit, Leuven",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    email: "aescaleq6@timesonline.co.uk",
  },
  {
    color: "#e00ad9",
    avatar:
      "https://robohash.org/cupiditateporrovoluptatum.png?size=50x50&set=set1",
    name: "Hagen Farans",
    university: "East Kazakstan State Technical University",
    sentences:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    email: "hfaransq7@purevolume.com",
  },
  {
    color: "#87cdf1",
    avatar: "https://robohash.org/adipiscietminus.png?size=50x50&set=set1",
    name: "Sollie Adamovicz",
    university: "City University",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "sadamoviczq8@upenn.edu",
  },
  {
    color: "#5d0dd4",
    avatar:
      "https://robohash.org/minimareiciendisdeleniti.png?size=50x50&set=set1",
    name: "Wallas Hinstridge",
    university: "Bakht Er-Ruda University",
    sentences:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    email: "whinstridgeq9@seattletimes.com",
  },
  {
    color: "#f2367b",
    avatar: "https://robohash.org/reruminciduntlaborum.png?size=50x50&set=set1",
    name: "Verina Timby",
    university: "Escuela Superior Politécnica del Litoral",
    sentences:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    email: "vtimbyqa@microsoft.com",
  },
  {
    color: "#9e4b14",
    avatar: "https://robohash.org/numquamautiure.png?size=50x50&set=set1",
    name: "Roma Sawday",
    university: "University College of Applied Sciences",
    sentences:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    email: "rsawdayqb@qq.com",
  },
  {
    color: "#13817b",
    avatar: "https://robohash.org/estullamdignissimos.png?size=50x50&set=set1",
    name: "Archy O' Mullane",
    university: "Université de Valenciennes et du Hainaut-Cambrésis",
    sentences:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "aoqc@eepurl.com",
  },
  {
    color: "#fa4dc1",
    avatar:
      "https://robohash.org/quidoloremqueassumenda.png?size=50x50&set=set1",
    name: "Shayna Piddocke",
    university: "Guru Ghasidas University",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "spiddockeqd@fotki.com",
  },
  {
    color: "#fa75c1",
    avatar: "https://robohash.org/itaqueanimitempora.png?size=50x50&set=set1",
    name: "Clyve Minocchi",
    university: "University of Science and Technology",
    sentences: "Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "cminocchiqe@nih.gov",
  },
  {
    color: "#7d8df2",
    avatar: "https://robohash.org/adculpaut.png?size=50x50&set=set1",
    name: "Heriberto Yukhnin",
    university: "Seigakuin University",
    sentences:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    email: "hyukhninqf@hud.gov",
  },
  {
    color: "#6f33c7",
    avatar: "https://robohash.org/etetvoluptatum.png?size=50x50&set=set1",
    name: "Orland Dudbridge",
    university: "Universidad de Cartagena",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "odudbridgeqg@altervista.org",
  },
  {
    color: "#15627b",
    avatar: "https://robohash.org/utipsaarchitecto.png?size=50x50&set=set1",
    name: "Jerrylee Inglis",
    university: "Indian Institute of Technology, Bombay",
    sentences:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    email: "jinglisqh@tinypic.com",
  },
  {
    color: "#102918",
    avatar: "https://robohash.org/etuteos.png?size=50x50&set=set1",
    name: "Livvy Constantine",
    university: "Universitas Muhammadiyah Surakarta",
    sentences: "Integer ac neque. Duis bibendum.",
    email: "lconstantineqi@kickstarter.com",
  },
  {
    color: "#29aa23",
    avatar:
      "https://robohash.org/perferendisrepudiandaedebitis.png?size=50x50&set=set1",
    name: "Catlee Goldster",
    university: "Hazara University",
    sentences:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    email: "cgoldsterqj@aol.com",
  },
  {
    color: "#b8f351",
    avatar: "https://robohash.org/etutsed.png?size=50x50&set=set1",
    name: "Lowrance Flowers",
    university: "Orissa University of Agriculture and Technology",
    sentences:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "lflowersqk@tuttocitta.it",
  },
  {
    color: "#e0c858",
    avatar: "https://robohash.org/inveritatisquis.png?size=50x50&set=set1",
    name: "Natalina Rosindill",
    university: "Universidad Católica Popular del Risaralda",
    sentences: "In sagittis dui vel nisl.",
    email: "nrosindillql@bravesites.com",
  },
  {
    color: "#edc5cc",
    avatar: "https://robohash.org/corporisestaccusamus.png?size=50x50&set=set1",
    name: "Juliette Spratt",
    university: "Universidade Metropolitana de Santos",
    sentences:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    email: "jsprattqm@angelfire.com",
  },
  {
    color: "#7ff395",
    avatar: "https://robohash.org/harumrepudiandaecum.png?size=50x50&set=set1",
    name: "Reube Salazar",
    university: "Kakatiya University",
    sentences:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    email: "rsalazarqn@cnbc.com",
  },
  {
    color: "#bf5bcd",
    avatar: "https://robohash.org/idcumqueneque.png?size=50x50&set=set1",
    name: "Kathi Isakovic",
    university: "Universidad México Americana del Norte",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    email: "kisakovicqo@usnews.com",
  },
  {
    color: "#098e62",
    avatar: "https://robohash.org/ameteosconsequatur.png?size=50x50&set=set1",
    name: "Jarvis Moryson",
    university: "Fachhochschule Worms",
    sentences:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    email: "jmorysonqp@si.edu",
  },
  {
    color: "#913b52",
    avatar: "https://robohash.org/quisquiaarchitecto.png?size=50x50&set=set1",
    name: "Angil Monks",
    university: "Osaka College of Music",
    sentences:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    email: "amonksqq@usa.gov",
  },
  {
    color: "#59133f",
    avatar: "https://robohash.org/fugaofficiisdolorem.png?size=50x50&set=set1",
    name: "Idelle Browning",
    university: "Delaware State University",
    sentences:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    email: "ibrowningqr@tripod.com",
  },
  {
    color: "#9c122f",
    avatar: "https://robohash.org/omnisarchitectovitae.png?size=50x50&set=set1",
    name: "Ragnar Rubroe",
    university: "Universitas Islam Nusantara",
    sentences:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    email: "rrubroeqs@delicious.com",
  },
  {
    color: "#fb8987",
    avatar: "https://robohash.org/pariaturcorruptinon.png?size=50x50&set=set1",
    name: "Becka Piecha",
    university: "Magadh University",
    sentences:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    email: "bpiechaqt@booking.com",
  },
  {
    color: "#8705e0",
    avatar:
      "https://robohash.org/blanditiiseligendirepellat.png?size=50x50&set=set1",
    name: "Clayborne Schruurs",
    university: "Xinghai Conservatory of Music",
    sentences:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "cschruursqu@amazon.co.jp",
  },
  {
    color: "#ff4c0b",
    avatar:
      "https://robohash.org/doloremquirepellendus.png?size=50x50&set=set1",
    name: "Willabella Cuskery",
    university: "Sarajevo Film Academy",
    sentences:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    email: "wcuskeryqv@japanpost.jp",
  },
  {
    color: "#dbb7c0",
    avatar:
      "https://robohash.org/modioccaecatiblanditiis.png?size=50x50&set=set1",
    name: "Karlene Bottelstone",
    university: "Shumei University",
    sentences:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    email: "kbottelstoneqw@cdbaby.com",
  },
  {
    color: "#757413",
    avatar: "https://robohash.org/earumautullam.png?size=50x50&set=set1",
    name: "Audre Bateson",
    university: "Ohio State University - Marion",
    sentences: "Aenean lectus.",
    email: "abatesonqx@yolasite.com",
  },
  {
    color: "#670a79",
    avatar:
      "https://robohash.org/laudantiumsitoccaecati.png?size=50x50&set=set1",
    name: "Jarad Rosenshine",
    university: "Kogakuin University",
    sentences: "Fusce posuere felis sed lacus.",
    email: "jrosenshineqy@miibeian.gov.cn",
  },
  {
    color: "#fd82d7",
    avatar:
      "https://robohash.org/nullaperspiciatisnihil.png?size=50x50&set=set1",
    name: "Dina Aubrun",
    university: "Baghdad College of Economic Sciences University",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "daubrunqz@economist.com",
  },
  {
    color: "#ad472d",
    avatar: "https://robohash.org/nemoautrem.png?size=50x50&set=set1",
    name: "Ramonda Marney",
    university: "Pädagogische Hochschule Zürich (Zurich School of Education)",
    sentences:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    email: "rmarneyr0@businesswire.com",
  },
  {
    color: "#e26131",
    avatar: "https://robohash.org/ipsumsintrecusandae.png?size=50x50&set=set1",
    name: "Gerianna Luetchford",
    university: "Université de Technologie de Belfort Montbéliard",
    sentences:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    email: "gluetchfordr1@tamu.edu",
  },
  {
    color: "#e65407",
    avatar: "https://robohash.org/suntisteid.png?size=50x50&set=set1",
    name: "Marty Rebanks",
    university: "University of Guam",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    email: "mrebanksr2@privacy.gov.au",
  },
  {
    color: "#15d187",
    avatar: "https://robohash.org/atqueculpaalias.png?size=50x50&set=set1",
    name: "Twyla Klaassens",
    university: "UCSI University",
    sentences:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    email: "tklaassensr3@newyorker.com",
  },
  {
    color: "#0d5c4d",
    avatar: "https://robohash.org/quiaquiasequi.png?size=50x50&set=set1",
    name: "Marylinda Labone",
    university: "NGO Vladikavkaz Institute of Economics, Management, and Law",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    email: "mlaboner4@theatlantic.com",
  },
  {
    color: "#02ef05",
    avatar: "https://robohash.org/etdolorumsaepe.png?size=50x50&set=set1",
    name: "Felic Skepper",
    university: "Ningxia Medical College",
    sentences:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    email: "fskepperr5@instagram.com",
  },
  {
    color: "#44d3ab",
    avatar: "https://robohash.org/adnonpossimus.png?size=50x50&set=set1",
    name: "Stillman Woollacott",
    university: "East Kazakhstan State University",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    email: "swoollacottr6@oaic.gov.au",
  },
  {
    color: "#b176a3",
    avatar:
      "https://robohash.org/deseruntpraesentiumtemporibus.png?size=50x50&set=set1",
    name: "Arnie Friedlos",
    university: "University of Wisconsin - Stevens Point",
    sentences:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    email: "afriedlosr7@t-online.de",
  },
  {
    color: "#2cb819",
    avatar: "https://robohash.org/auteareiciendis.png?size=50x50&set=set1",
    name: "Fulvia Demongeot",
    university:
      'Moldova State University of Medicine and Pharmacy "N. Testemitsanu"',
    sentences:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    email: "fdemongeotr8@last.fm",
  },
  {
    color: "#fc9df3",
    avatar: "https://robohash.org/quiaomnisinventore.png?size=50x50&set=set1",
    name: "Kassandra Auguste",
    university: "Slovak Medical University",
    sentences:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    email: "kauguster9@hostgator.com",
  },
  {
    color: "#5c70cb",
    avatar:
      "https://robohash.org/sedpariaturperferendis.png?size=50x50&set=set1",
    name: "Johnathon Aspinall",
    university: "University of Texas at Brownsville",
    sentences:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    email: "jaspinallra@epa.gov",
  },
  {
    color: "#128f93",
    avatar:
      "https://robohash.org/maximemolestiaefacere.png?size=50x50&set=set1",
    name: "Matilda Le Merchant",
    university: "Beijing New Asia University",
    sentences:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    email: "mlerb@4shared.com",
  },
  {
    color: "#c1665c",
    avatar: "https://robohash.org/quismaioresullam.png?size=50x50&set=set1",
    name: "Corry Camies",
    university: "Taylor University",
    sentences:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    email: "ccamiesrc@bigcartel.com",
  },
  {
    color: "#b3659e",
    avatar: "https://robohash.org/similiqueillosint.png?size=50x50&set=set1",
    name: "Wilden Sictornes",
    university: "Southern Utah University",
    sentences:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    email: "wsictornesrd@fastcompany.com",
  },
  {
    color: "#1cdded",
    avatar: "https://robohash.org/atveronecessitatibus.png?size=50x50&set=set1",
    name: "Samantha Wipfler",
    university: "Universitas Islam Sultan Agung",
    sentences:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    email: "swipflerre@wikipedia.org",
  },
  {
    color: "#c0328f",
    avatar:
      "https://robohash.org/rationererumsimilique.png?size=50x50&set=set1",
    name: "Darb Giuroni",
    university: "Universidad Central de Bayamón",
    sentences:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    email: "dgiuronirf@apache.org",
  },
  {
    color: "#34b56d",
    avatar: "https://robohash.org/estiustonulla.png?size=50x50&set=set1",
    name: "Myles Bianco",
    university: "Universidad Técnica de Oruro",
    sentences:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    email: "mbiancorg@cnet.com",
  },
  {
    color: "#35e9e4",
    avatar: "https://robohash.org/nemoaliquamet.png?size=50x50&set=set1",
    name: "Naoma Ruddin",
    university: "Universidad Nacional de San Martín",
    sentences:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    email: "nruddinrh@deliciousdays.com",
  },
  {
    color: "#cf3cf9",
    avatar: "https://robohash.org/repellatdolorut.png?size=50x50&set=set1",
    name: "Davidson Fitchett",
    university: "Universidad Nacional de Misiones",
    sentences:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    email: "dfitchettri@psu.edu",
  },
  {
    color: "#b0bbcc",
    avatar: "https://robohash.org/quiacorporisnon.png?size=50x50&set=set1",
    name: "Jo Dreier",
    university: "Western Governors University",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    email: "jdreierrj@sbwire.com",
  },
  {
    color: "#84b821",
    avatar: "https://robohash.org/estvoluptatemquis.png?size=50x50&set=set1",
    name: "Ellette Winnard",
    university: "University of Chemical Technology and Metallurgy",
    sentences:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    email: "ewinnardrk@hostgator.com",
  },
  {
    color: "#b952c0",
    avatar: "https://robohash.org/ipsumearumiure.png?size=50x50&set=set1",
    name: "Deena Beattie",
    university: "Bloomsburg University of Pennsylvania",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    email: "dbeattierl@about.com",
  },
  {
    color: "#a4c57d",
    avatar:
      "https://robohash.org/quioccaecativoluptatem.png?size=50x50&set=set1",
    name: "Natasha Fellibrand",
    university: "Lamphun College of Agriculture and Technology",
    sentences:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    email: "nfellibrandrm@geocities.com",
  },
  {
    color: "#2053de",
    avatar: "https://robohash.org/sitquoerror.png?size=50x50&set=set1",
    name: "Sheilakathryn Dunbobbin",
    university: "Kobe Shinwa Women's University",
    sentences:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    email: "sdunbobbinrn@gizmodo.com",
  },
  {
    color: "#a22d6b",
    avatar: "https://robohash.org/etnullamolestiae.png?size=50x50&set=set1",
    name: "Harmony Halbert",
    university: "Universidad Alberto Hurtado",
    sentences:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    email: "hhalbertro@miitbeian.gov.cn",
  },
  {
    color: "#402919",
    avatar: "https://robohash.org/remperferendisea.png?size=50x50&set=set1",
    name: "Neille Seathwright",
    university: "International College of Tourism and Hotel Management",
    sentences:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    email: "nseathwrightrp@phoca.cz",
  },
  {
    color: "#93a04e",
    avatar: "https://robohash.org/ipsumprovidenteum.png?size=50x50&set=set1",
    name: "Valaria Pluck",
    university: "University of Maryland Eastern Shore",
    sentences: "Proin at turpis a pede posuere nonummy.",
    email: "vpluckrq@bbc.co.uk",
  },
  {
    color: "#1c6b76",
    avatar: "https://robohash.org/quibusdamatdeleniti.png?size=50x50&set=set1",
    name: "Kara Peggrem",
    university: "Al Mansour University College",
    sentences:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    email: "kpeggremrr@about.com",
  },
];

const newSection = document.createElement("section");
newSection.style.display = "grid";
newSection.style.gridTemplateColumns = "repeat(4, 1fr)";
newSection.style.gap = "10px";
document.body.appendChild(newSection);

data.forEach((v) => {
  const newArticle = document.createElement("article");
  newArticle.style.display = "flex";
  newArticle.style.flexDirection = "column";
  newArticle.style.justifyContent = "center";
  newArticle.style.alignItems = "center";
  newArticle.style.width = "100%";
  newArticle.style.height = "100%";
  newArticle.style.border = "1px solid black";
  newArticle.style.borderRadius = "20px";
  newArticle.style.padding = "10px";
  newArticle.style.gap = "20px";
  newSection.appendChild(newArticle);

  const newPicture = document.createElement("picture");
  newPicture.style.border = "1px solid black";
  newPicture.style.borderRadius = "100%";
  newPicture.style.overflow = "hidden";
  newArticle.appendChild(newPicture);

  const newImg = document.createElement("img");
  newImg.src = v.avatar;
  newImg.style.width = "100%";
  //   newImg.style.height = "400px";
  newPicture.appendChild(newImg);

  const newDiv = document.createElement("div");
  newDiv.style.display = "flex";
  newDiv.style.flexDirection = "column";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  newDiv.style.gap = "5px";
  newArticle.appendChild(newDiv);

  const newH3 = document.createElement("h3");
  newH3.innerText = v.name;
  newH3.style.fontWeight = 700;
  newH3.style.fontSize = "20px";
  newH3.style.textAlign = "center";
  newDiv.appendChild(newH3);

  const newH5 = document.createElement("h5");
  newH5.innerText = v.university;
  newH5.style.fontWeight = 500;
  newH5.style.textAlign = "center";
  newDiv.appendChild(newH5);

  const newP = document.createElement("p");
  newP.innerText = v.sentences;
  newP.style.textAlign = "center";
  newP.style.display = "-webkit-box";
  newP.style.webkitBoxOrient = "vertical";
  newP.style.webkitLineClamp = "3";
  newP.style.textOverflow = "ellipsis";
  newP.style.overflow = "hidden";
  newP.style.flex = 1;
  newArticle.appendChild(newP);

  const newBtn = document.createElement("button");
  newBtn.innerText = v.email;
  newBtn.style.backgroundColor = v.color;
  newBtn.style.color = "white";
  newBtn.style.padding = "10px";
  newBtn.style.borderRadius = "10px";
  newArticle.appendChild(newBtn);
});
