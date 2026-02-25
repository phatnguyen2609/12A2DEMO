const CLASS_NAME = "Chuyên Anh 2 (2023-2026)";

const GROUP_HEADERS = {
    1: "image/headers/header_to_1.jpg", 
    2: "image/headers/header_to_2.jpg", 
    3: "image/headers/header_to_3.jpg", 
    4: "image/headers/header_to_4.jpg"  
};

// --- GLOBAL AUDIO PLAYER ---
const audioPlayer = new Audio();
audioPlayer.loop = true; 
let currentDisk = null; 
let diskTimeout = null; 

const membersData =[
    // --- TỔ 1 ---
    { group: 1, name: "Trần Hà Minh Anh", role: "Tổ trưởng, Thủ quỹ", img: "image/avatars/THMA.jpg", 
      dob: "06/01/2008", keywords:["Trách nhiệm", "nội tâm", "nhạy cảm"],
      bio: "Mình cảm thấy bản thân là một cô gái sống nội tâm, tuy nhiều người nhận xét nhìn vẻ bề ngoài thì thấy mình khá lạnh lùng, khó gần nhưng mà khi tiếp xúc rùi thì mình khá là thân thiện, dễ chơi đó nha. Với nhóm tính cách INFJ, mình là một người sống khá là nguyên tắc, thích làm mọi việc rõ ràng và có trách nhiệm. Đây vừa là điểm mạnh, vừa là điểm yếu của mình vì đôi khi mình hay tự đặt áp lực khá lớn cho bản thân. Mình không phải là người quá sôi nổi, nhưng lại nhạy cảm và tinh tế, dễ để ý đến cảm xúc của người khác. Dù bản thân có những khuyết điểm nhưng mình luôn cố gắng yêu bản thân từng ngày, với mình thì sự trưởng thành đến từ việc dám đối diện với thiếu sót của bản thân và kiên trì thay đổi. Vào những lúc đối diện với khó khăn mình luôn nghĩ đến câu nói mà mình tâm đắc: 'Vì mình có khả năng vượt qua, nên thử thách này mới xuất hiện' để nhắc nhở bản thân phải mạnh mẽ và cố gắng hơn nữa." },
    
    { group: 1, name: "Hồ Trần Diệp Ngân", role: "Lớp trưởng", img: "image/avatars/HTDN.jpg",
      dob: "18/01/2008", keywords:["Dễ thương", "vui vẻ", "ngầu"],
      bio: "Hello mình là Diệp Ngân, mình đã từng mong muốn 3 năm cấp 3 của mình sẽ được đồng hành cùng một tập thể đoàn kết và gắn bó, giờ chắc được 2,5 năm ròi và mình RẤT RẤT hạnh phúc khi mong ước của mình thành sự thật rùi ilysm 12A2" },
    
    { group: 1, name: "Nguyễn Thị Hà Linh", role: "Bí thư lớp", img: "image/avatars/NTHL.jpg",
      dob: "12/07/2008", keywords:["ồn ào", "hoạt bát", "trưa nay ăn gì"],
      bio: "Nếu để nói về bản thân, thì mình sẽ có rất nhiều thông tin và thứ để nói, nên mình sẽ nói về 'Hà Linh của A2k28' nhé. Đầu tiên, mình rất hạnh phúc và biết ơn vì được là một mảnh ghép của 12A2, trải qua ba năm gắn bó, thì có lẽ đối với mình, nếu không phải A2 thì sẽ không là ai cả. Từ khi được đồng hành cùng với mọi người, mình đã cải thiện và phát triển bản thân rất nhiều, được làm quen và đồng hành cùng những mảnh ghép tuyệt vời còn lại của A2 đã làm hlinh trở nên biết quan tâm và giúp đỡ mọi người hơn, giúp hlinh có ý thức học tập hơn,... Và cũng cảm ơn 12A2 đã giúp mình tạo nên giữ kí ức không thể nào quên: gđth, những buổi ăn trưa, đi chơi, mua đồ ăn, những buổi học,... Và cuối cùng, mình ước cho tất cả chúng ta sau này sẽ thật là hạnh phúc, thành công và hông quên nhau! Mình iu mọi người nhìu! " },

    { group: 1, name: "Nguyễn Thị Mai Phương", role: "", img: "image/avatars/NTMP.jpg",
      dob: "07/08/2008", keywords:["Biết lắng nghe 👂", "Linh hoạt 🏃‍♀️", "Thân thiện 😜"],
      bio: "Hồi học cấp 2 mình khá ít nói và trầm tính. Nhưng mà học chung với a2 xong mình thấy mình mạnh dạn lên nhiều lunn. Kỉ niệm đáng nhớ nhất chắc có lẽ là tập gđth chung với lớp, mệt nhưng mà vui 😁. I love cái tổ siêu ồn ào của mình, love tất cả thành viên của a2 💗." },
    
    { group: 1, name: "Lê Trần Thảo Nguyên", role: "", img: "image/avatars/LTTN.jpg",
      dob: "20/11/2008", keywords:["Năng nổ", "chủ động", "tham vọng"],
      bio: "Từ khi mới bước chân vào ngôi trường chuyên, mình đã nuôi dưỡng ước mơ được học tập và gặp gỡ với nhiều bạn bè, có nhiều mối quan hệ chất lượng và nhiều kỉ niệm đẹp dưới mái trường cấp 3. Những khoảnh khắc  trong học tập, các hoạt động tập thể và cả những lần vấp ngã đã giúp mình trưởng thành hơn từng ngày. Từ một người tự ti và thụ động, mình học cách tự tin bày tỏ suy nghĩ, biết lắng nghe và kiên trì theo đuổi mục tiêu của mình." },
    
    { group: 1, name: "Lê Ngọc Đài Cát", role: "", img: "image/avatars/LNĐC.jpg", dob: "03/01/2008", keywords:["lowkirkenuinely niche", "highkirkenuinely funni", "67 brain rot final boss"], bio: "Mình thấy rất biết ơn vì được học ở một môi trường năng động như thế này, nơi cho mình gặp những người bạn hết sức dễ thương và giúp mình trưởng thành hơn nhiều trong nhận thức. Love. Xoxo" },
    
    { group: 1, name: "Phạm Nguyễn Gia Linh", role: "", img: "image/avatars/PNGL.jpg",
      dob: "12/03/2008", keywords: ["Cool ngầu", "lạnh lùng"],
      bio: "Từ khi vô đây, tôi được cứu rỗi, mém xíu nx thành wibu anitisocial rùi" },

    { group: 1, name: "Lương Minh Triết", role: "Lớp phó lao động", img: "image/avatars/LMT.jpg",
      dob: "05/07/2008", keywords:["Self-indulgent", "eager beaver", "conscientious"],
      bio: "Mình là Lương Minh Triết, or Cá Trích. Trên hành trình 'tập làm người lớn', mình từng không ít lần loay hoay giữa những ngã rẽ, nơi mỗi quyết định đều mang sức nặng của một sự kết thúc hay một khởi đầu. BUT, chính trong những xoay vần ấy, mình nhận ra một điều: changes reveal what stays the same. Sau tất cả, điều khiến mình cảm thấy tự hào nhất không phải là những thành tựu, mà là việc mình đã dám giữ lại 'đứa trẻ' bên trong – một đứa trẻ dám mơ những giấc mơ lớn và dám sống trọn vẹn vì những gì mình yêu thích." },

    // --- TỔ 2 ---
    { group: 2, name: "Đào Khải Anh", role: "Tổ trưởng", img: "image/avatars/ĐKA.jpg", dob: "", keywords:[], bio: "" },
    
    { group: 2, name: "Phạm Bảo Linh", role: "Sao đỏ", img: "image/avatars/PBL.jpg", dob: "", keywords:[], bio: "" },
    
    { group: 2, name: "Thái Trần Bảo Châu", role: "", img: "image/avatars/TTBC.jpg",
      dob: "26/11/2008", keywords:["điềm đạm", "chân thành", "hòa đồng"],
      bio: "Tui rất vui vì đã được là một phần của A2-K28. A2 đã đem đến cho tui những trải nghiệm mới mẻ và những kỉ niệm khó quên. Ở đây, tui không chỉ được học kiến thức mà còn học cách trưởng thành qua từng hoạt động, buổi học và kỉ niệm cùng thầy cô, bạn bè. Những lần cùng nhau cố gắng, cùng cười và cả những lúc chưa hoàn hảo đã giúp tui hiểu hơn về giá trị của sự đoàn kết và sẻ chia. Cảm ơn A2 đã xuất hiện trong hành trình phát triển của tui!" },
    
    { group: 2, name: "Hà Thị Ánh Dương", role: "", img: "image/avatars/HTÁD.jpg",
      dob: "27/01/2008", keywords: ["Vui vẻ", "thân thiện"],
      bio: "Tui yêu 12A2 nhiều lắm, yêu theo cách mà mỗi lần nghĩ tới thôi tim cũng thấy ấm lại. Tui thật sự biết ơn, biết ơn rất nhiều vì được là một phần của 12A2, được học chung, cười chung, buồn chung và lớn lên cùng các bạn. Cảm ơn 12A2 vì đã cho tui những kỷ niệm đẹp đẽ, trong veo và dễ thương đến mức sau này nhớ lại chắc chắn sẽ mỉm cười. Những giờ học, những lần nói chuyện vu vơ, những tiếng cười trong lớp… tất cả đều là thanh xuân của tui.<br>Tui cũng muốn nói lời cảm ơn chính bản thân mình. Cảm ơn vì đã không bỏ cuộc, vì đã cố gắng từng ngày dù có lúc mệt mỏi, áp lực, muốn chuyển trường, muốn trốn đi đâu đó. Cảm ơn vì đã đủ mạnh mẽ để vượt qua peer pressure, vượt qua những ngày thấy mình lạc lõng và yếu đuối. Cảm ơn vì đã ở lại, đã kiên trì, để hôm nay có thể tự hào nhìn lại và nói rằng: “Mình đã làm được gòiiiii.”<br>12A2 không chỉ là một lớp học, mà là một phần ký ức, một phần thanh xuân, một phần trái tim của tui. Thật sự biết ơn và trân trọng vô cùng 💗💗💗" },
    
    { group: 2, name: "Phạm Đức Anh", role: "", img: "image/avatars/PĐA.jpg",
      dob: "28/10/2008", keywords:["Hiền lành", "tốt bụng", "hay lắng nghe"],
      bio: "Mình là một người luôn mang trong mình nhiều ước mơ và khát vọng. Hồi nhỏ, ước mơ của mình là trở thành một phi công, được bay trên bầu trời cao rộng và khám phá những vùng đất mới. Dù ước mơ ấy có thay đổi theo thời gian, nhưng nó đã nuôi dưỡng trong mình tinh thần dám nghĩ, dám ước và không ngừng cố gắng. Trên hành trình trưởng thành, mình đã trải qua nhiều kỉ niệm đáng nhớ, cả vui lẫn buồn. Những trải nghiệm ấy giúp mình học được cách mở lòng, tự tin hơn, biết lắng nghe và thấu hiểu bản thân cũng như mọi người xung quanh. Chính sự thay đổi trong suy nghĩ và thái độ sống đã giúp mình ngày càng hoàn thiện hơn so với trước kia." },
    
    { group: 2, name: "Nguyễn Ngọc Như Hiếu", role: "", img: "image/avatars/NNNH.jpg",
      dob: "22/01/2008", keywords:["Sáng nắng chiều mưa", "chủ đề nào cũng có", "hát cả ngày"],
      bio: "Mình từng là một đứa khá mơ hồ về tương lai, nhưng theo thời gian, mình học được cách ước mơ rõ ràng hơn. Mình muốn vào một ngôi trường tốt, muốn xinh hơn, tự tin hơn và biết giữ gìn những mối quan hệ quý giá. Những ngày học ở đây có áp lực, có mệt mỏi, nhưng cũng đầy ắp niềm vui. Mình hạnh phúc vì được là một phần của 12A2. Mong rằng sau khi ra trường, chúng mình vẫn còn những buổi đi chơi, cà phê cùng nhau, vẫn giữ liên lạc và dõi theo nhau trên hành trình trưởng thành. Và hơn hết, mong tất cả chúng ta đều phải thành công nhé." },
    
    { group: 2, name: "Lê Nhã Thi", role: "", img: "image/avatars/LNT.jpg",
      dob: "23/04/2008", keywords: ["Hoà đồng", "Vui Vẻ"],
      bio: "Hello, Nhã Thi đây. Mình là một người khá bình thường, nhưng lại có nhiều kỉ niệm vui trong lớp. Những giờ học ồn ào, mấy lần bị gọi tên bất ngờ hay những buổi cười nói với bạn bè chắc sẽ là thứ mình nhớ lâu nhất. Dù hiện tại còn nhiều điều chưa rõ ràng, mình vẫn có ước mơ riêng và đang cố gắng từng ngày để tiến gần hơn tới nó. Với mình, thanh xuân đơn giản là được học, được sai và được trưởng thành cùng những người xung quanh." },
    
    { group: 2, name: "Nguyễn Trần Minh Uyên", role: "", img: "image/avatars/NTMU.jpg",
      dob: "27/11/2008", keywords: ["Bùng cháy", "Âm thầm", "Hoạt náo"],
      bio: "Hello mọi người mình là Minh Uyên đây, mình rất quý tập thể 12A2. Trong ba năm học vừa qua mình có rất nhiều kỉ niệm vui cùng lớp, nên mời các bạn cùng khám phá những kỉ niệm đó cùng bọn mình nha" },

    // --- TỔ 3 ---
    { group: 3, name: "Lê Nguyễn Khánh Tiên", role: "Tổ trưởng", img: "image/avatars/LNKT.jpg",
      dob: "18/09/2008", keywords: ["Đẹp gái", "Thấu hiểu", "Ý nghĩa"],
      bio: "Tui là cá mập 🦈, ý là biệt danh thôi nha.<br>Tui của hiện tại được vun đắp từ tình yêu của những người trong gia đình, từ sự đồng hành của những người bạn siêu ôk và từ cả việc tui học được cách yêu thương Khánh Tiên. Những điều đó không tự nhiên mà có, mà bắt đầu từ những sai lầm trong quá khứ, từ những lần vấp ngã khiến tui buồn, suy nghĩ và trưởng thành hơn. Chính những kỉ niệm đó đã giúp tui hiểu bản thân và biết trân trọng hiện tại. Ước mơ của tui rất đơn giản: có thêm thật nhiều TIỀN để tự do sống cuộc đời mình muốn, và có thêm những người thật lòng yêu thương, ở bên tui lâu dài." },
    
    { group: 3, name: "Huỳnh Nguyễn Thanh Xuân", role: "", img: "image/avatars/HNTX.jpg",
      dob: "07/05/2008", keywords: ["Cái đầu lạnh", "Bình tĩnh", "Kiên nhẫn"],
      bio: "Mình cảm thấy rất may mắn khi được trở thành một phần của tập thể lớp 12A2. Ba năm đồng hành cùng lớp là quãng thời gian ý nghĩa, giúp mình gặp gỡ những người bạn mới, có thêm những người bạn thân và trải nghiệm nhiều điều thú vị mà bản thân mình trước kia chưa từng nghĩ sẽ được thử. Tất cả những kỉ niệm ấy đã tạo nên một thước phim hài hòa giữa buồn và vui, mang lại giá trị tinh thần vô cùng to lớn đối với mình. Trải qua ba năm, mình cảm thấy bản thân trưởng thành hơn, biết suy nghĩ chín chắn và lo cho tương lai nhiều hơn. Hiện tại, mục tiêu lớn nhất của mình có lẽ là đậu vào ngôi trường đại học mong muốn và được theo đuổi ngành học mình thật sự đam mê." },
    
    { group: 3, name: "Hồ Bảo Ngọc", role: "", img: "image/avatars/HBN.jpg",
      dob: "23/11/2008", keywords: ["Lạc quan", "Đa chiều", "Sáng tạo"],
      bio: "'Everthing happened for a reason'<br>Mình đã luôn giữ mindset đó suốt những năm cấp 3, bởi với mình, những ký ức trong quá khứ, dù vui hay buồn, đều âm thầm góp phần tạo nên con người mình của hiện tại. Có những vấp ngã khiến mình đau đớn, muốn bỏ cuộc, nhưng cũng chính chúng dạy mình mạnh mẽ và lạc quan hơn trong hành trình chinh phục tri thức . Mình tin rằng mọi điều xảy ra trong đời đều mang theo một ý nghĩa riêng, dẫn dắt chúng ta từng bước đến một phiên bản tốt hơn của chính mình và mở ra một tương lai tươi đẹp chờ đón phía trước." },
    
    { group: 3, name: "Đặng Trọng Hoàn", role: "", img: "image/avatars/ĐTH.jpg",
      dob: "15/10/2008", keywords: ["Vô tư", "Hoà đồng", "Hướng nội/ngoại"],
      bio: "Mình là người tò mò, thích đào sâu mọi thứ mình quan tâm, từ game, công nghệ, âm nhạc cho tới những câu hỏi khoa học và đời sống nghe hơi “vô tri”. Mình có xu hướng suy nghĩ logic (nhiều khi không logic), hay phản biện và không dễ chấp nhận câu trả lời hời hợt. Tính cách pha trộn giữa thực tế và hài hước, nói chuyện khá thẳng, đôi khi cà khịa nhưng không ác ý. Mình coi trọng trải nghiệm hơn hình thức, thích tìm hiểu bản chất vấn đề và làm chủ thứ mình dùng. Dù hay than vãn linh tinh, tôi vẫn nghiêm túc với những điều mình quan tâm và người mình để ý." },
    
    { group: 3, name: "Phạm Tuấn Minh", role: "", img: "image/avatars/PTM.jpg",
      dob: "22/08/2008", keywords:["Vui vẻ", "ham học hỏi", "cầu tiến"],
      bio: "Nhìn lại hành trình đã qua, mình nhận ra sự hoàn thiện của bản thân hiện tại là kết quả của những mảnh ghép kỷ niệm và những ước mơ không ngừng nghỉ. Từ một người hay mơ mộng, những bài học thực tế và sự đồng hành của bạn bè đã giúp mình trở nên điềm tĩnh và thấu đáo hơn. Chính những lần cùng nhau vượt qua áp lực thi cử hay những buổi vui chơi hết mình đã tôi luyện nên một phiên bản mình bản lĩnh của hôm nay. Cảm ơn những năm tháng qua đã làm nền tảng để mình tự tin bước tiếp vào tương lai với tâm thế vững vàng nhất." },
    
    { group: 3, name: "Đinh Quốc Trí", role: "", img: "image/avatars/ĐQT.jpg",
      dob: "11/06/2008", keywords:["Bình thường", "Đơn giản", "DMO"],
      bio: "15/01/2026: Bước vào chuyên Hùng Vương cùng với những ước mơ, hoài bão. Có thể khẳng định rằng, đây là một lựa chọn đầy may mắn đối với mình. 12a2 đã tạo ra cho mình một môi trường mà mình đã thực sự có thể trưởng thành, có được những kỉ niệm mà mình không thể nào quên. Từ những ngày bắt đầu vào lớp, những lần ngông cuồng, những lần thực sự hạnh phúc khi mình được là một phần của lớp, tất cả đã góp phần làm nên một ĐQT của ngày hôm nay. Mình tin rằng, những kí ức ấy sẽ sống mãi trong tâm trí của mình." },
    
    { group: 3, name: "Đào Thị Phương Thảo", role: "", img: "image/avatars/ĐTPT.jpg",
      dob: "23/02/2008", keywords: ["Năng lượng", "nhiệt tình", "nhạy cảm"],
      bio: "Mình không biết tại sao lại có duyên được học ngôi trường này, được gặp gỡ những người bạn vừa năng động, hài hước mà cũng vừa dễ thương và tình cảm như vậy. Ban đầu mình tưởng chừng như học ở đây sẽ rất khó khăn, rất áp lực và khô khan nữa. Nhưng nhìn vậy mà không phải vậy! Mọi thứ khác xa như trong tưởng tượng. Dù có nhiều lúc nhức đầu với bài vở, áp lực vì nhiều deadline dí, lo âu vì điểm số không như mong muốn,.. nhưng sau tất cả, mình đã vượt qua được để trở thành bản thân của ngày hôm nay, luôn tích cực học hỏi, nỗ lực cố gắng từng ngày và tin tưởng vào bản thân mình hơn. Vì thế mình cảm thấy thấy rất trân trọng và yêu quý khoảng thời gian cấp ba dưới mái trường này và được học lớp A2 cùng các bạn K28 nữa! Cảm ơn vì đã gặp nhau và cùng nhau gắn bó!!! I love u guys ♥️♥️♥️" },

    { group: 3, name: "Trần Huyền Trang", role: "Lớp phó học tập", img: "image/avatars/THT.jpg",
      dob: "07/01/2008", keywords: ["Cởi mở", "Hoan hỉ", "Kiểm Soát 🥵"],
      bio: "Mình muốn làm luật sư ở Đức, mà hơi khó tại gia đình không cho, chắc chỉ ở Đức thôi là được 🫧 Mình nghĩ bản thân mình hiện tại có thể gọi là gần trở thành phiên bản mà mình muốn để sẵn sàng bước vào thế giới người lớn trong tương lai, gất là vui 🥳 cũng nhờ vào mọi người, những khoảng khắc và cảm xúc mình có trong suốt 18 năm qua ☃️ Tương lai hi vọng mọi người giữ sức khoẻ, may mắn và vui vẻ, hi vọng mốt mình sẽ trở thành young rich beautiful lady, mua truyện 🏳️‍🌈, đi concert ENHYPEN, du lịch đi chơi với gia đình và bạn bè." },

    { group: 3, name: "Nguyễn Hải Anh", role: "Ban tự quản", img: "image/avatars/NHA.jpg", 
      dob: "30/08/2008", keywords:["buồn ngủ", "oách", "quỷ quậy"], 
      bio: "OÁCH NHẤT 12A2 !!!" },

    // --- TỔ 4 ---
    { group: 4, name: "Nguyễn Quỳnh Lam", role: "Tổ trưởng", img: "image/avatars/NQL.jpg",
      dob: "06/07/2008", keywords:["Vui vẻ", "không gay", "mong manh"],
      bio: "Là 1 người iu hoà bình, ghét chiến tranh, thích động vật và (hơi) không ưa loài người. Hơi lắm mồm, thích dốc dơ+mất dậy, sẽ thành emo gỉl trong một vài trường hợp. Tự tin khẳng định mình là người hèn số 1 VN, chuyên gia gáy to gáy bẩn nma đụng chuyện thì im gu 💔. Nhìn tưng tưng zị thui chứ là một người khá dễ tổn thưn ehe. 👉👈💦." },
    
    { group: 4, name: "Trần Hoàng Anh Thư", role: "Sao đỏ", img: "image/avatars/THAT.jpg",
      dob: "03/01/2008", keywords:["Năng động", "Hoạt bát", "Vui vẻ"],
      bio: "Mình là một người trẻ luôn tò mò và thích tìm hiểu nhiều lĩnh vực khác nhau, từ học tập, ngôn ngữ đến những vấn đề xoay quanh đạo đức và mối quan hệ giữa người với người. Mình đang ở giai đoạn quan trọng của tuổi học trò, vừa học vừa lo cho tương lai nên thường đặt ra nhiều câu hỏi để hiểu rõ hơn về thế giới xung quanh. Mình không ngại bắt đầu từ những điều nhỏ, vì tin rằng kiến thức và kinh nghiệm đều tích lũy từng chút một. Dù đôi lúc còn băn khoăn, mình luôn cố gắng chủ động học hỏi, cải thiện bản thân và hướng tới những mục tiêu dài hạn một cách nghiêm túc." },
    
    { group: 4, name: "Nguyễn Vũ Đức", role: "", img: "image/avatars/NVĐ.jpg",
      dob: "02/07/2008", keywords:["vui vẻ", "nhân văn", "trung lập"],
      bio: "T muốn giàu, t muốn bản thân giàu hơn để chăm lo cho cuộc sống của những người xung quanh t, nhưng người mà t yêu thương được tốt hơn. Do trong xã hội hiện nay, để chăm lo cho cuộc sống của những người bản thân yêu thương thì hoặc là có địa vị, hoặc là có tiền, hoặc là có bối cảnh (chống lưng). Tuy nhiên có bối cảnh và có địa vị thường liên quan đến những công việc chính trị (không phải tất cả, nhưng rất nhiều), mà nhưng việc, sự việc, hành động, hành vi liên quan trực tiếp hoặc gián tiếp đến chính trị thường sẽ bị cuốn vào một bàn cờ. Nó khá là rắc rối và nhiều góc tối, nên con đường đơn giản nhất là có tiền hay nói cách khác là giàu. => T muốn giàu." },
    
    { group: 4, name: "Cù Hoàn Mỹ", role: "", img: "image/avatars/CHM.jpg",
      dob: "06/06/2008", keywords:["Lúc này lúc kia", "nghiêm túc", "hề hước"],
      bio: "Ba năm cấp ba của tớ đóng gói rất nhiều kỉ niệm đáng nhớ, thực sự là không thể nào quên luôn. Đây cũng là khoảng thời gian giúp tớ trưởng thành hơn nhờ những trải nghiệm đắt giá có 1 0 2 với những người bạn xuất sắc, có chung đam mê, chung chí hướng. Hơn nữa, những người anh, người chị nhiệt huyết cùng những người lái đò tận tâm với nghề ở ngôi trường này đã cầm đuốc dẫn đường không chỉ tớ mà rất nhiều thế hệ trẻ ở đây, giúp tớ học được rất nhiều thứ bổ ích, vạch rõ hơn con đường tương lai sau này." },
    
    { group: 4, name: "Nguyễn Thanh Thảo", role: "", img: "image/avatars/NTT.jpg", dob: "28/01/2008", keywords:["anti-social", "anti-capitalism", "FREE PALESTINE 🇵🇸🍉"], bio: "Mình vẽ gay" },
    
    { group: 4, name: "Đặng An Ninh", role: "", img: "image/avatars/ĐAN.jpg", 
      dob: "14/07/2008", keywords:["Vui vẻ", "Hòa đồng", "Tốt bụng"], 
      bio: "Khi nhìn lại ba năm học cấp ba, mình nhận ra điều quý giá nhất chính là những người bạn ngồi cạnh mình. Mình từng là một người khá trầm tính nếu hong phải quá thân, nhưng mỗi lần được bạn bè rủ rê đi ăn, tham gia các hoạt động nhóm hay cả những lúc giải lao tám chuyện, mình cảm thấy bản thân cởi mở và trưởng thành hơn. Ước mơ của mình là sẽ luôn giữ được những tình bạn đẹp này. Chính những kỉ niệm giản dị ấy đã giúp mình hiểu rằng, sự kết nối và chia sẻ là một phần quan trọng để hoàn thiện bản thân. Mình mong rằng dù mai này mỗi đứa một nơi, chúng ta vẫn sẽ luôn trò chuyện và là hậu phương của nhau nhíee." },
    
    { group: 4, name: "Nguyễn Thuận Phát", role: "", img: "image/avatars/NTP.jpg", dob: "26/09/2008", keywords:["Mùa hạ", "𝓑𝓸𝓾𝓵𝓮𝓿𝓪𝓻𝓭", "Mùa đông"], bio: "Mình được nhào nặn từ cái nắng mùa hạ, từ cái lạnh mùa đông, từ âm thanh, xúc cảm và dòng chảy ấm nóng của sự sống. Theo quy luật, một năm bắt đầu từ mùa xuân; nhưng với mình, một vòng lặp thực sự khởi đầu từ mùa hạ, thăng hoa vào mùa đông, rồi lại lụi tàn khi mùa hè kế tiếp chạm ngõ.<br><br>Mình yêu cái đẹp, sự sáng tạo và những nguồn cảm hứng bất tận. Trong thế giới nghệ thuật ấy, có hai bản ngã tách biệt hoàn toàn: một bên là sự nhạy cảm, thô ráp, đầy rẫy nỗi đau của mùa đông; bên còn lại là tiếng synth, tiếng bass dồn dập của mùa hè. Với mình, nghệ sĩ không chỉ cho đi âm thanh hay hình ảnh, mà họ trao đi cách họ thấu thị nhân sinh- những góc khuất có thể là điểm chạm giữa người nghệ sĩ và người nghe, giữa những tâm hồn đồng điệu với nhau.<br><br>Âm nhạc là không gian mà sự thô tục cũng có thể là nghệ thuật; nơi tình dục, giới với giới, tôn giáo, sắc tộc hay thậm chí là bạo lực đều được giải phóng. Thử hỏi, có điều gì mà ta không thể bộc bạch thông qua âm nhạc? Nhưng âm nhạc không phải là điểm dừng chân duy nhất, mình còn thiết kế, viết văn và làm thơ. Nghệ sĩ dùng âm nhạc để nói lên tiếng lòng của họ; còn với mình, âm nhạc là không gian để chiêm nghiệm những thông điệp ấy. Nếu âm nhạc là nơi mình 'thu nhận' và SUY NGHĨ, văn chương mới là lúc mình thực sự NÓI RA, gửi gắm vào đó những câu chuyện niên thiếu, những nhịp đập của tình yêu đầu đời và cả những niềm kiêu hãnh cá nhân.<br><br>Từ thế giới nghệ thuật, mình soi chiếu vào bản thân và nhìn ra xã hội, để rồi hình thành hai thực tại song song: Thế giới nội tâm và Thế giới nhân văn. Mình vốn là kẻ bay bổng, suy nghĩ bằng cảm xúc chứ không phải những hệ số nhị phân 0 và 1 khô khan. Mình luôn tự đặt ra những câu hỏi trời ơi đất hỡi, mình không tìm cách chứng minh một công thức, mình tìm cách để hiểu nguyên nhân của các vấn đề hiện hữu trong xã hội. Mình thích thông qua chính những câu hỏi đó để lắng nghe quan điểm của mọi người xung quanh, mỗi người một quan điểm khác nhau giúp mình có câu trả lời khách quan hơn cho mỗi câu hỏi.<br><br>Có chút ích kỷ khi mình nhận ra những vấn đề đó sẽ tác động trực tiếp đến mình; nhưng nếu gạt bỏ cái tôi ấy, mình vẫn không đành lòng nhìn thấy những phận đời khốn khổ (khá khác biệt với tư duy 'tư bản' thuần túy ha?). Mình học cách quan sát và trân trọng sự đa dạng. Có những thứ nhìn vậy mà không phải vậy; chính sự khác biệt tạo nên tính độc bản, và mình muốn bảo vệ điều đó.<br><br>Có cả một mùa hạ và một mùa đông trong tính cách của mình. Mình dễ nói, dễ nghe, dễ chiều, nhưng cũng khó nghe, khó hiểu, khó chiều. Mình thích sự hoài niệm của quá khứ, thích nhớ về những lúc bản thân còn vô tư, nhớ những trang sách mùi mực, nhớ những chuyến đi phố xá mới lạ, yêu những người bạn cùng lớn, yêu từng động tác mà mình từng thuần thục trước kia; chúng gắn với thân xác của mình, là một phần trong chất lỏng của sự sống. Nó đã từng khiến mình trở thành một con người tiêu cực, phải rất chật vật để vượt qua, mình đã nhận ra một điều: Chính hiện tại là quá khứ của tương lai, nếu mình không sống hết mình, mình sẽ lại 'chết' thêm một lần nữa. Lúc nắng lên là mùa hè của mình, mình hoạt ngôn, thích chia sẻ, thích bày trò; nhưng khi nắng xuống; lòng mình lại lạnh lẽo, lấp đầy bởi những nỗi buồn, nỗi lo lắng khó tan. Mình là vậy đó, luôn có cả mùa hạ và mùa đông, luôn thấy mùa hạ và mùa đông, nhưng mình không còn tự chối bỏ điều đó, mình yêu sự khó hiểu của bản thân, bản ngã của mình nằm trong cả hai mùa đó, mất một mùa là mình chết một nửa.<br><br>Mình từng muốn làm phi công để bay cao, bay xa, nhưng giờ đây mình không còn muốn tự trói buộc vào một 'nghề nghiệp ước mơ' cụ thể nào cả. Mình đề cao sự phù hợp vì chỉ khi bắt đầu từ sự phù hợp, ta mới chạm tới được đam mê thực thụ. Mình muốn sống một cuộc đời thật ý nghĩa, thật 'nghệ'. Mình muốn trở thành một tia sáng - không cần phải là ai khác, chính mình là tia sáng tự soi rọi cho bản thân và cho những người mình yêu thương." },
     
    { group: 4, name: "Nguyễn Như Tâm", role: "", img: "image/avatars/NNT.jpg",
      dob: "05/02/2008", keywords:["Chaebol", "chấm", "chị bảy gà"],
      bio: "Trước đây, mình là người đặt nặng điểm số, luôn thất vọng khi không đạt được mục tiêu đề ra, khiến mình nghĩ rằng cuộc sống học đường cấp ba rất căng thẳng và mệt mỏi. Tuy nhiên, hơn hai năm gắn bó với các bạn lớp A2 K28 đã giúp mình thay đổi. Mình trở nên lạc quan hơn và cảm nhận được niềm vui khi đến trường (cụ thể là không có ngày nào mình nhịn cười được trước những hành động vô tri và dí dỏm của các bạn). Nếu trước kia chỉ một điểm số thấp cũng đủ làm mình buồn cả ngày, thì giờ đây mình có thể mỉm cười trước những thất bại cùng bạn bè (Giả sử như được 0 điểm toán từ thấy Quốc Anh mà tụi mình vẫn hí ha hí hửng chụp locket). Chính các bạn đã giúp mình học cách lạc quan, giữ tinh thần vui vẻ để tiếp tục cố gắng." }
];

// --- RENDER LOGIC ---

function getZodiacImage(dob) {
    if (!dob) return null;
    const parts = dob.split('/');
    if (parts.length < 2) return null;
    
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "zodiac/BB.png";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "zodiac/SN.png";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "zodiac/BD.png";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "zodiac/KN.png";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) return "zodiac/ST.png"; 
    if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) return "zodiac/CG.png";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "zodiac/ST (2).png";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "zodiac/XN.png";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) return "zodiac/TB.png";
    if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) return "zodiac/TY.png";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "zodiac/NM.png";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "zodiac/MK.png";

    return null;
}

const seasonClasses = {
    1: "season-spring",
    2: "season-summer",
    3: "season-autumn",
    4: "season-winter"
};

function renderCards() {
    const app = document.getElementById('app');
    const groups =[1, 2, 3, 4];
    
    groups.forEach(groupNum => {
        const groupMembers = membersData.filter(m => m.group === groupNum);
        
        const section = document.createElement('div');
        section.className = `group-section group-theme-${groupNum} ${seasonClasses[groupNum]}`;
        
        const contentContainer = document.createElement('div');
        contentContainer.className = 'group-content-container';

        const title = document.createElement('h2');
        title.className = `group-title-text group-font-${groupNum}`;
        
        title.innerHTML = `TỔ <span class="group-num">${groupNum}</span>`;
        
        contentContainer.appendChild(title);
        
        const wrapper = document.createElement('div');
        wrapper.className = 'cards-wrapper';
        
        groupMembers.forEach((member, index) => {
            const card = createCard(member, index);
            wrapper.appendChild(card);
        });
        
        contentContainer.appendChild(wrapper);
        section.appendChild(contentContainer);
        app.appendChild(section);
    });
}

function createCard(data, index) {
    const container = document.createElement('div');
    container.className = 'card-container scroll-hidden';

    const zodiacFile = getZodiacImage(data.dob);
    const zodiacImgTag = zodiacFile ? `<img src="image/${zodiacFile}" class="zodiac-bg" alt="Zodiac">` : '';
    const headerSrc = GROUP_HEADERS[data.group] || "image/headers/header_template.jpg";

    const imgFileName = data.img.split('/').pop().replace(/\.[^/.]+$/, "");
    const musicSrc = `music/${imgFileName}.mp3`;
    
    const avatarFileName = data.img.split('/').pop();
    const labelStyle = `background-image: url('image/musiccover/${avatarFileName}');`;
    
    const musicDiskHTML = `
        <div class="disk-container" data-song="${musicSrc}">
            <div class="disk-body">
                <div class="disk-label" style="${labelStyle}"></div>
                <div class="disk-hole"></div>
            </div>
        </div>
    `;

    container.innerHTML = `
        <div class="card-inner">
            ${musicDiskHTML}
            <div class="card-face card-front">
                ${zodiacImgTag}
                <div class="header-image-container">
                    <img src="${headerSrc}" alt="Header Image" onerror="this.style.display='none'; this.parentNode.style.backgroundColor='#334155';">
                </div>

                <div class="card-content">
                    <div class="photo-area">
                        <img src="${data.img}" alt="${data.name}" onerror="this.src='https://placehold.co/105x140?text=No+Image';">
                    </div>
                    
                    <div class="info-area">
                        <div class="field">
                            <span class="label">Họ và tên:</span>
                            <span class="value">${data.name} 
                                ${data.role ? `<span class="role-badge">${data.role}</span>` : ''}
                            </span>
                        </div>
                        <div class="field">
                            <span class="label">Ngày sinh:</span>
                            <span class="value">${data.dob || '---'}</span>
                        </div>
                        <div class="field">
                            <span class="label">Lớp:</span>
                            <span class="value">${CLASS_NAME}</span>
                        </div>
                        <div class="keywords">
                            ${data.keywords.length > 0 
                                ? data.keywords.map(k => `<span class="keyword">#${k}</span>`).join('') 
                                : '<span class="keyword">#12A2</span>'}
                        </div>
                    </div>
                </div>
                <div class="flip-hint">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 14l5-5-5-5"></path>
                        <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"></path>
                    </svg>
                </div>
            </div>

            <div class="card-face card-back">
                <div class="back-container">
                    <div class="bio-title">Hành trình trưởng thành</div>
                    <div class="bio-scroll-area">
                        <p class="bio-text">
                            ${data.bio || "Thành viên này chưa cập nhật thông tin chi tiết. Nhưng chắc chắn là một mảnh ghép không thể thiếu của A2!"}
                        </p>
                    </div>
                    <div class="scroll-indicator">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M7 13l5 5 5-5"></path>
                            <path d="M7 6l5 5 5-5"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    `;

    container.addEventListener('click', (e) => {
        e.stopPropagation();
        handleCardClick(container);
    });

    const diskContainer = container.querySelector('.disk-container');
    const diskBody = container.querySelector('.disk-body');
    
    if (diskBody) {
        diskBody.addEventListener('click', (e) => {
            e.stopPropagation(); 
            toggleDiskState(diskContainer, diskBody);
        });
    }

    return container;
}

// --- INTERACTION LOGIC ---

const overlay = document.getElementById('overlay');
let activeCard = null;
let placeholder = null; 

function handleCardClick(card) {
    if (activeCard === card) {
        card.classList.toggle('is-flipped');
        return;
    }

    if (activeCard) {
        closeCard();
    }
    
    // Khóa CSS transition để set vị trí ban đầu hoàn hảo
    card.style.transition = 'none';

    const rect = card.getBoundingClientRect();
    
    // Cấp phát khoảng trống chính xác cho thẻ
    placeholder = document.createElement('div');
    placeholder.className = 'card-placeholder';
    placeholder.style.width = rect.width + 'px';
    placeholder.style.height = rect.height + 'px';
    
    card.parentNode.insertBefore(placeholder, card);

    // Ghim cứng thẻ hiện tại ở vị trí ban đầu chuẩn bị bay lên
    card.style.position = 'fixed';
    card.style.top = rect.top + 'px';
    card.style.left = rect.left + 'px';
    card.style.width = rect.width + 'px';
    card.style.height = rect.height + 'px';
    card.style.margin = '0';
    card.style.zIndex = '9999';
    card.style.transform = 'translate(0px, 0px) scale(1)';

    activeCard = card;
    overlay.classList.add('active');

    // Force reflow để đảm bảo trạng thái reset có hiệu lực
    void card.offsetWidth; 

    // Bỏ khóa để bắt đầu animate cực mượt
    card.style.transition = '';

    card.classList.add('is-focused');
    
    card.style.top = '50%';
    card.style.left = '50%';
    
    // Responsive cực kì mượt mà bằng Javascript hoàn toàn, không Thrash Layout
    const scaleValue = window.innerWidth <= 768 ? 1.05 : 1.15;
    card.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;

    startDisk(card);
}

function startDisk(card) {
    const diskContainer = card.querySelector('.disk-container');
    const diskBody = card.querySelector('.disk-body');
    
    if (!diskContainer) return;

    const songUrl = diskContainer.getAttribute('data-song');

    if (diskTimeout) clearTimeout(diskTimeout);

    if (songUrl) {
        diskTimeout = setTimeout(() => {
            audioPlayer.src = songUrl;
            
            audioPlayer.onerror = function() {
                console.log("Không tìm thấy file nhạc hoặc lỗi tải: " + songUrl);
                diskContainer.style.display = 'none';
            };

            diskContainer.style.display = 'block';

            audioPlayer.play().then(() => {
                diskContainer.classList.remove('state-retracted');
                diskBody.classList.remove('paused');
                diskContainer.classList.add('state-playing');
                diskBody.classList.add('spinning');
                currentDisk = { container: diskContainer, body: diskBody };
            }).catch(e => {
                console.log("Cần tương tác người dùng hoặc lỗi file", e);
            });
            
        }, 800); 
    }
}

function toggleDiskState(container, body) {
    const isPlaying = container.classList.contains('state-playing');

    if (isPlaying) {
        container.classList.remove('state-playing');
        container.classList.add('state-retracted');
        body.classList.add('paused');
        audioPlayer.pause();
    } else {
        container.classList.remove('state-retracted');
        container.classList.add('state-playing');
        body.classList.remove('paused');
        audioPlayer.play();
    }
}

function closeCard() {
    if (!activeCard) return;

    if (diskTimeout) clearTimeout(diskTimeout);
    audioPlayer.pause();
    audioPlayer.currentTime = 0; 
    audioPlayer.onerror = null;

    const diskContainer = activeCard.querySelector('.disk-container');
    const diskBody = activeCard.querySelector('.disk-body');
    
    if (diskContainer) {
        diskContainer.classList.remove('state-playing', 'state-retracted');
        diskBody.classList.remove('spinning', 'paused');
    }
    currentDisk = null;

    activeCard.classList.remove('is-flipped');

    if (placeholder) {
        // Lấy tọa độ gốc mà thẻ cần trở về và bay thẳng
        const rect = placeholder.getBoundingClientRect();
        
        activeCard.style.top = rect.top + 'px';
        activeCard.style.left = rect.left + 'px';
        activeCard.style.transform = 'translate(0px, 0px) scale(1)';
    }

    activeCard.classList.remove('is-focused');
    overlay.classList.remove('active');

    const currentCard = activeCard;
    const currentPlaceholder = placeholder;

    setTimeout(() => {
        // Đã hoàn tất transition hạ cánh, thu thẻ về DOM
        currentCard.style.transition = 'none';
        
        currentCard.style.position = '';
        currentCard.style.top = '';
        currentCard.style.left = '';
        currentCard.style.width = '';
        currentCard.style.height = '';
        currentCard.style.margin = '';
        currentCard.style.zIndex = '';
        currentCard.style.transform = ''; 

        if (currentPlaceholder && currentPlaceholder.parentNode) {
            currentPlaceholder.parentNode.removeChild(currentPlaceholder);
        }
        
        void currentCard.offsetWidth;
        currentCard.style.transition = '';

    }, 600); // Timeline sync perfectly 100% với CSS (0.6s)

    activeCard = null;
    placeholder = null;
}

overlay.addEventListener('click', closeCard);
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeCard();
});

renderCards();

// --- SCROLL OBSERVER LOGIC ---
const observerOptions = {
    threshold: 0.01 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-hidden');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card-container').forEach(card => {
    observer.observe(card);
});

// ==========================================
// --- GSAP SCROLL ANIMATION CHO COVER ---
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
        gsap.to(".cover-container", {
            scrollTrigger: {
                trigger: "body",         
                start: "top top",        
                end: "400px",            
                scrub: 1,                
            },
            height: "400px",             
            ease: "none"
        });
    });

    mm.add("(max-width: 768px)", () => {
        gsap.to(".cover-container", {
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "250px",            
                scrub: 1,
            },
            height: "250px",             
            ease: "none"
        });
    });
});
