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

// Giữ nguyên dữ liệu membersData của bạn
const membersData =,
      bio: "Mình cảm thấy bản thân là một cô gái sống nội tâm, tuy nhiều người nhận xét nhìn vẻ bề ngoài thì thấy mình khá lạnh lùng, khó gần nhưng mà khi tiếp xúc rùi thì mình khá là thân thiện, dễ chơi đó nha. Với nhóm tính cách INFJ, mình là một người sống khá là nguyên tắc, thích làm mọi việc rõ ràng và có trách nhiệm. Đây vừa là điểm mạnh, vừa là điểm yếu của mình vì đôi khi mình hay tự đặt áp lực khá lớn cho bản thân. Mình không phải là người quá sôi nổi, nhưng lại nhạy cảm và tinh tế, dễ để ý đến cảm xúc của người khác. Dù bản thân có những khuyết điểm nhưng mình luôn cố gắng yêu bản thân từng ngày, với mình thì sự trưởng thành đến từ việc dám đối diện với thiếu sót của bản thân và kiên trì thay đổi. Vào những lúc đối diện với khó khăn mình luôn nghĩ đến câu nói mà mình tâm đắc: 'Vì mình có khả năng vượt qua, nên thử thách này mới xuất hiện' để nhắc nhở bản thân phải mạnh mẽ và cố gắng hơn nữa." },
    { group: 1, name: "Hồ Trần Diệp Ngân", role: "Lớp trưởng", img: "image/avatars/HTDN.jpg",
      dob: "18/01/2008", keywords:,
      bio: "Hello mình là Diệp Ngân, mình đã từng mong muốn 3 năm cấp 3 của mình sẽ được đồng hành cùng một tập thể đoàn kết và gắn bó, giờ chắc được 2,5 năm ròi và mình RẤT RẤT hạnh phúc khi mong ước của mình thành sự thật rùi ilysm 12A2" },
    { group: 1, name: "Nguyễn Thị Hà Linh", role: "Bí thư lớp", img: "image/avatars/NTHL.jpg",
      dob: "12/07/2008", keywords:,
      bio: "Nếu để nói về bản thân, thì mình sẽ có rất nhiều thông tin và thứ để nói, nên mình sẽ nói về 'Hà Linh của A2k28' nhé. Đầu tiên, mình rất hạnh phúc và biết ơn vì được là một mảnh ghép của 12A2, trải qua ba năm gắn bó, thì có lẽ đối với mình, nếu không phải A2 thì sẽ không là ai cả. Từ khi được đồng hành cùng với mọi người, mình đã cải thiện và phát triển bản thân rất nhiều, được làm quen và đồng hành cùng những mảnh ghép tuyệt vời còn lại của A2 đã làm hlinh trở nên biết quan tâm và giúp đỡ mọi người hơn, giúp hlinh có ý thức học tập hơn,... Và cũng cảm ơn 12A2 đã giúp mình tạo nên giữ kí ức không thể nào quên: gđth, những buổi ăn trưa, đi chơi, mua đồ ăn, những buổi học,... Và cuối cùng, mình ước cho tất cả chúng ta sau này sẽ thật là hạnh phúc, thành công và hông quên nhau! Mình iu mọi người nhìu! " },
    { group: 1, name: "Nguyễn Thị Mai Phương", role: "", img: "image/avatars/NTMP.jpg",
      dob: "07/08/2008", keywords:,
      bio: "Hồi học cấp 2 mình khá ít nói và trầm tính. Nhưng mà học chung với a2 xong mình thấy mình mạnh dạn lên nhiều lunn. Kỉ niệm đáng nhớ nhất chắc có lẽ là tập gđth chung với lớp, mệt nhưng mà vui 😁. I love cái tổ siêu ồn ào của mình, love tất cả thành viên của a2 💗." },
    { group: 1, name: "Lê Trần Thảo Nguyên", role: "", img: "image/avatars/LTTN.jpg",
      dob: "20/11/2008", keywords:,
      bio: "Từ khi mới bước chân vào ngôi trường chuyên, mình đã nuôi dưỡng ước mơ được học tập và gặp gỡ với nhiều bạn bè, có nhiều mối quan hệ chất lượng và nhiều kỉ niệm đẹp dưới mái trường cấp 3. Những khoảnh khắc  trong học tập, các hoạt động tập thể và cả những lần vấp ngã đã giúp mình trưởng thành hơn từng ngày. Từ một người tự ti và thụ động, mình học cách tự tự tin bày tỏ suy nghĩ, biết lắng nghe và kiên trì theo đuổi mục tiêu của mình." },
    { group: 1, name: "Lê Ngọc Đài Cát", role: "", img: "image/avatars/LNĐC.jpg", dob: "03/01/2008", keywords:, bio: "Mình thấy rất biết ơn vì được học ở một môi trường năng động như thế này, nơi cho mình gặp những người bạn hết sức dễ thương và giúp mình trưởng thành hơn nhiều trong nhận thức. Love. Xoxo" },
    { group: 1, name: "Phạm Nguyễn Gia Linh", role: "", img: "image/avatars/PNGL.jpg",
      dob: "12/03/2008", keywords:,
      bio: "Từ khi vô đây, tôi được cứu rỗi, mém xíu nx thành wibu anitisocial rùi" },
    { group: 1, name: "Lương Minh Triết", role: "Lớp phó lao động", img: "image/avatars/LMT.jpg",
      dob: "05/07/2008", keywords:,
      bio: "Mình là Lương Minh Triết, or Cá Trích. Trên hành trình 'tập làm người lớn', mình từng không ít lần loay hoay giữa những ngã rẽ, nơi mỗi quyết định đều mang sức nặng của một sự kết thúc hay một khởi đầu. BUT, chính trong những xoay vần ấy, mình nhận ra một điều: changes reveal what stays the same. Sau tất cả, điều khiến mình cảm thấy tự hào nhất không phải là những thành tựu, mà là việc mình đã dám giữ lại 'đứa trẻ' bên trong – một đứa trẻ dám mơ những giấc mơ lớn và dám sống trọn vẹn vì những gì mình yêu thích." },

    // --- TỔ 2 ---
    { group: 2, name: "Đào Khải Anh", role: "Tổ trưởng", img: "image/avatars/ĐKA.jpg", dob: "", keywords:[], bio: "" },
    { group: 2, name: "Phạm Bảo Linh", role: "Sao đỏ", img: "image/avatars/PBL.jpg", dob: "", keywords:[], bio: "" },
    { group: 2, name: "Thái Trần Bảo Châu", role: "", img: "image/avatars/TTBC.jpg",
      dob: "26/11/2008", keywords:,
      bio: "Tui rất vui vì đã được là một phần của A2-K28. A2 đã đem đến cho tui những trải nghiệm mới mẻ và những kỉ niệm khó quên. Ở đây, tui không chỉ được học kiến thức mà còn học cách trưởng thành qua từng hoạt động, buổi học và kỉ niệm cùng thầy cô, bạn bè. Những lần cùng nhau cố gắng, cùng cười và cả những lúc chưa hoàn hảo đã giúp tui hiểu hơn về giá trị của sự đoàn kết và sẻ chia. Cảm ơn A2 đã xuất hiện trong hành trình phát triển của tui!" },
    { group: 2, name: "Hà Thị Ánh Dương", role: "", img: "image/avatars/HTÁD.jpg",
      dob: "27/01/2008", keywords:,
      bio: "Tui yêu 12A2 nhiều lắm, yêu theo cách mà mỗi lần nghĩ tới thôi tim cũng thấy ấm lại. Tui thật sự biết ơn, biết ơn rất nhiều vì được là một phần của 12A2, được học chung, cười chung, buồn chung và lớn lên cùng các bạn... 12A2 không chỉ là một lớp học, mà là một phần ký ức, một phần thanh xuân, một phần trái tim của tui." },
    { group: 2, name: "Phạm Đức Anh", role: "", img: "image/avatars/PĐA.jpg",
      dob: "28/10/2008", keywords:,
      bio: "Mình là một người luôn mang trong mình nhiều ước mơ và khát vọng. Hồi nhỏ, ước mơ của mình là trở thành một phi công, được bay trên bầu trời cao rộng và khám phá những vùng đất mới. Dù ước mơ ấy có thay đổi theo thời gian, nhưng nó đã nuôi dưỡng trong mình tinh thần dám nghĩ, dám ước và không ngừng cố gắng." },
    { group: 2, name: "Nguyễn Ngọc Như Hiếu", role: "", img: "image/avatars/NNNH.jpg",
      dob: "22/01/2008", keywords:,
      bio: "Mình từng là một đứa khá mơ hồ về tương lai, nhưng theo thời gian, mình học được cách ước mơ rõ ràng hơn. Mình muốn vào một ngôi trường tốt, muốn xinh hơn, tự tin hơn và biết giữ gìn những mối quan hệ quý giá." },
    { group: 2, name: "Lê Nhã Thi", role: "", img: "image/avatars/LNT.jpg",
      dob: "23/04/2008", keywords:,
      bio: "Hello, Nhã Thi đây. Mình là một người khá bình thường, nhưng lại có nhiều kỉ niệm vui trong lớp. Những giờ học ồn ào, mấy lần bị gọi tên bất ngờ hay những buổi cười nói với bạn bè chắc sẽ là thứ mình nhớ lâu nhất." },
    { group: 2, name: "Nguyễn Trần Minh Uyên", role: "", img: "image/avatars/NTMU.jpg",
      dob: "27/11/2008", keywords:,
      bio: "Hello mọi người mình là Minh Uyên đây, mình rất quý tập thể 12A2. Trong ba năm học vừa qua mình có rất nhiều kỉ niệm vui cùng lớp, nên mời các bạn cùng khám phá những kỉ niệm đó cùng bọn mình nha" },

    // --- TỔ 3 ---
    { group: 3, name: "Lê Nguyễn Khánh Tiên", role: "Tổ trưởng", img: "image/avatars/LNKT.jpg",
      dob: "18/09/2008", keywords:,
      bio: "Tui là cá mập 🦈, ý là biệt danh thôi nha. Tui của hiện tại được vun đắp từ tình yêu của những người trong gia đình, từ sự đồng hành của những người bạn siêu ôk và từ cả việc tui học được cách yêu thương Khánh Tiên." },
    { group: 3, name: "Huỳnh Nguyễn Thanh Xuân", role: "", img: "image/avatars/HNTX.jpg",
      dob: "07/05/2008", keywords:,
      bio: "Mình cảm thấy rất may mắn khi được trở thành một phần của tập thể lớp 12A2. Ba năm đồng hành cùng lớp là quãng thời gian ý nghĩa, giúp mình gặp gỡ những người bạn mới, có thêm những người bạn thân và trải nghiệm nhiều điều thú vị." },
    { group: 3, name: "Hồ Bảo Ngọc", role: "", img: "image/avatars/HBN.jpg",
      dob: "23/11/2008", keywords:,
      bio: "'Everthing happened for a reason'. Mình đã luôn giữ mindset đó suốt những năm cấp 3, bởi với mình, những ký ức trong quá khứ, dù vui hay buồn, đều âm thầm góp phần tạo nên con người mình của hiện tại." },
    { group: 3, name: "Đặng Trọng Hoàn", role: "", img: "image/avatars/ĐTH.jpg",
      dob: "15/10/2008", keywords:,
      bio: "Mình là người tò mò, thích đào sâu mọi thứ mình quan tâm, từ game, công nghệ, âm nhạc cho tới những câu hỏi khoa học và đời sống nghe hơi “vô tri”. Mình có xu hướng suy nghĩ logic (nhiều khi không logic), hay phản biện." },
    { group: 3, name: "Phạm Tuấn Minh", role: "", img: "image/avatars/PTM.jpg",
      dob: "22/08/2008", keywords:,
      bio: "Nhìn lại hành trình đã qua, mình nhận ra sự hoàn thiện của bản thân hiện tại là kết quả của những mảnh ghép kỷ niệm và những ước mơ không ngừng nghỉ." },
    { group: 3, name: "Đinh Quốc Trí", role: "", img: "image/avatars/ĐQT.jpg",
      dob: "11/06/2008", keywords:,
      bio: "15/01/2026: Bước vào chuyên Hùng Vương cùng với những ước mơ, hoài bão. Có thể khẳng định rằng, đây là một lựa chọn đầy may mắn đối với mình." },
    { group: 3, name: "Đào Thị Phương Thảo", role: "", img: "image/avatars/ĐTPT.jpg",
      dob: "23/02/2008", keywords:,
      bio: "Mình không biết tại sao lại có duyên được học ngôi trường này, được gặp gỡ những người bạn vừa năng động, hài hước mà cũng vừa dễ thương và tình cảm như vậy." },
    { group: 3, name: "Trần Huyền Trang", role: "Lớp phó học tập", img: "image/avatars/THT.jpg",
      dob: "07/01/2008", keywords:,
      bio: "Mình muốn làm luật sư ở Đức, mà hơi khó tại gia đình không cho, chắc chỉ ở Đức thôi là được 🫧 Mình nghĩ bản thân mình hiện tại có thể gọi là gần trở thành phiên bản mà mình muốn." },
    { group: 3, name: "Nguyễn Hải Anh", role: "Ban tự quản", img: "image/avatars/NHA.jpg", 
      dob: "30/08/2008", keywords:, 
      bio: "OÁCH NHẤT 12A2 !!!" },

    // --- TỔ 4 ---
    { group: 4, name: "Nguyễn Quỳnh Lam", role: "Tổ trưởng", img: "image/avatars/NQL.jpg",
      dob: "06/07/2008", keywords:,
      bio: "Là 1 người iu hoà bình, ghét chiến tranh, thích động vật và (hơi) không ưa loài người. Hơi lắm mồm, thích dốc dơ+mất dậy, sẽ thành emo gỉl trong một vài trường hợp." },
    { group: 4, name: "Trần Hoàng Anh Thư", role: "Sao đỏ", img: "image/avatars/THAT.jpg",
      dob: "03/01/2008", keywords:,
      bio: "Mình là một người trẻ luôn tò mò và thích tìm hiểu nhiều lĩnh vực khác nhau, từ học tập, ngôn ngữ đến những vấn đề xoay quanh đạo đức và mối quan hệ giữa người với người." },
    { group: 4, name: "Nguyễn Vũ Đức", role: "", img: "image/avatars/NVĐ.jpg",
      dob: "02/07/2008", keywords:,
      bio: "T muốn giàu, t muốn bản thân giàu hơn để chăm lo cho cuộc sống của những người xung quanh t, nhưng người mà t yêu thương được tốt hơn." },
    { group: 4, name: "Cù Hoàn Mỹ", role: "", img: "image/avatars/CHM.jpg",
      dob: "06/06/2008", keywords:,
      bio: "Ba năm cấp ba của tớ đóng gói rất nhiều kỉ niệm đáng nhớ, thực sự là không thể nào quên luôn. Đây cũng là khoảng thời gian giúp tớ trưởng thành hơn." },
    { group: 4, name: "Nguyễn Thanh Thảo", role: "", img: "image/avatars/NTT.jpg", dob: "28/01/2008", keywords:, bio: "Mình vẽ gay" },
    { group: 4, name: "Đặng An Ninh", role: "", img: "image/avatars/ĐAN.jpg", 
      dob: "14/07/2008", keywords:, 
      bio: "Khi nhìn lại ba năm học cấp ba, mình nhận ra điều quý giá nhất chính là những người bạn ngồi cạnh mình. Mình từng là một người khá trầm tính nếu hong phải quá thân." },
    { group: 4, name: "Nguyễn Thuận Phát", role: "", img: "image/avatars/NTP.jpg", dob: "26/09/2008", keywords:, bio: "Mình được nhào nặn từ cái nắng mùa hạ, từ cái lạnh mùa đông, từ âm thanh, xúc cảm và dòng chảy ấm nóng của sự sống." },
    { group: 4, name: "Nguyễn Như Tâm", role: "", img: "image/avatars/NNT.jpg",
      dob: "05/02/2008", keywords:,
      bio: "Trước đây, mình là người đặt nặng điểm số, luôn thất vọng khi không đạt được mục tiêu đề ra, khiến mình nghĩ rằng cuộc sống học đường cấp ba rất căng thẳng và mệt mỏi." }
];

// --- RENDER LOGIC ---

function getZodiacImage(dob) {
    if (!dob) return null;
    const parts = dob.split('/');
    if (parts.length < 2) return null;
    
    const day = parseInt(parts, 10);
    const month = parseInt(parts, 10);

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
    const groups =;
    
    groups.forEach(groupNum => {
        const groupMembers = membersData.filter(m => m.group === groupNum);
        
        const section = document.createElement('div');
        section.className = `group-section group-theme-${groupNum} ${seasonClasses}`;
        
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
    const headerSrc = GROUP_HEADERS || "image/headers/header_template.jpg";

    const imgFileName = data.img.split('/').pop().replace(/\.+$/, "");
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
    
    const rect = card.getBoundingClientRect();
    
    placeholder = document.createElement('div');
    placeholder.className = 'card-placeholder';
    
    card.parentNode.insertBefore(placeholder, card);

    // Freeze current position before animating
    card.style.position = 'fixed';
    card.style.top = rect.top + 'px';
    card.style.left = rect.left + 'px';
    card.style.zIndex = '9999';
    card.style.margin = '0';
    
    activeCard = card;
    overlay.classList.add('active');

    void card.offsetWidth; 

    // Apply focused class (CSS handles the centering and scaling naturally now)
    card.classList.add('is-focused');
    
    // Smooth transition to center
    card.style.top = '50%';
    card.style.left = '50%';

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
            
        }, 600); 
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
    activeCard.classList.remove('is-focused');
    overlay.classList.remove('active');

    if (placeholder) {
        const rect = placeholder.getBoundingClientRect();
        activeCard.style.top = rect.top + 'px';
        activeCard.style.left = rect.left + 'px';
    }

    const currentCard = activeCard;
    const currentPlaceholder = placeholder;

    setTimeout(() => {
        currentCard.style.transition = 'none';
        currentCard.style.position = '';
        currentCard.style.top = '';
        currentCard.style.left = '';
        currentCard.style.zIndex = '';
        currentCard.style.margin = '';
        
        if (currentPlaceholder && currentPlaceholder.parentNode) {
            currentPlaceholder.parentNode.removeChild(currentPlaceholder);
        }
        
        void currentCard.offsetWidth;
        currentCard.style.transition = '';

    }, 600);

    activeCard = null;
    placeholder = null;
}

overlay.addEventListener('click', closeCard);
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeCard();
});

renderCards();

// --- SCROLL OBSERVER LOGIC ---
const observerOptions = { threshold: 0.01 };
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
