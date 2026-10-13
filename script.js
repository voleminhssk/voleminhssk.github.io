const banks = [
[
{q:"Một trong những mục tiêu cơ bản của hoạt động sản xuất kinh doanh là gì?",o:["Đáp ứng nhu cầu của con người và tạo lợi nhuận hợp pháp","Loại bỏ hoàn toàn sự cạnh tranh trên thị trường","Chỉ tạo ra sản phẩm mà không cần người tiêu dùng","Thay thế mọi hoạt động quản lí của Nhà nước"],a:0,e:"Sản xuất kinh doanh hướng tới tạo ra hàng hóa, dịch vụ để đáp ứng nhu cầu và mang lại lợi ích kinh tế hợp pháp."},
{q:"Ngân sách nhà nước được hiểu là gì?",o:["Quỹ tiền riêng của từng doanh nghiệp","Toàn bộ các khoản thu, chi của Nhà nước được dự toán và thực hiện trong thời gian nhất định","Tiền tiết kiệm của các hộ gia đình","Nguồn vốn chỉ dùng để trả lương công chức"],a:1,e:"Ngân sách nhà nước là toàn bộ các khoản thu, chi của Nhà nước được cơ quan có thẩm quyền quyết định và thực hiện trong thời hạn nhất định."},
{q:"Hành vi nào thể hiện trách nhiệm của công dân trong việc thực hiện chính sách an sinh xã hội?",o:["Trốn tránh nghĩa vụ đóng bảo hiểm bắt buộc","Lợi dụng chính sách để trục lợi","Thực hiện đúng quy định về bảo hiểm và hỗ trợ người có hoàn cảnh khó khăn","Phát tán thông tin sai lệch về chính sách xã hội"],a:2,e:"Tuân thủ quy định về bảo hiểm và hỗ trợ đúng cách góp phần bảo đảm an sinh xã hội."},
{q:"Khi lựa chọn nghề nghiệp, người lao động nên ưu tiên điều gì?",o:["Chỉ chọn nghề đang được quảng cáo nhiều","Cân nhắc năng lực, sở thích, nhu cầu xã hội và điều kiện thực tế","Chọn nghề theo bạn bè dù không phù hợp","Bỏ qua yêu cầu chuyên môn của nghề"],a:1,e:"Lựa chọn nghề nghiệp phù hợp cần kết hợp năng lực, sở thích, nhu cầu thị trường lao động và hoàn cảnh cá nhân."},
{q:"Theo nguyên tắc cơ bản của pháp luật, công dân bình đẳng trước pháp luật có nghĩa là gì?",o:["Mọi người đều được miễn trách nhiệm pháp lí","Chỉ người có chức vụ mới phải tuân thủ pháp luật","Mọi người đều bình đẳng về quyền, nghĩa vụ và trách nhiệm pháp lí theo quy định","Mỗi người được tự chọn luật áp dụng cho mình"],a:2,e:"Bình đẳng trước pháp luật nghĩa là không ai được đứng ngoài pháp luật; quyền, nghĩa vụ và trách nhiệm được xác định theo quy định pháp luật."},
{q:"Hành vi nào là biểu hiện của tiêu dùng có trách nhiệm?",o:["Mua hàng theo trào lưu dù không cần thiết","Tìm hiểu nguồn gốc, chất lượng và tác động môi trường của sản phẩm","Chỉ lựa chọn hàng hóa có bao bì bắt mắt","Vứt bỏ đồ còn sử dụng tốt để mua đồ mới"],a:1,e:"Tiêu dùng có trách nhiệm cân nhắc nhu cầu, chất lượng, nguồn gốc và ảnh hưởng xã hội, môi trường."},
{q:"Một hợp đồng dân sự hợp pháp thường cần đáp ứng điều kiện nào?",o:["Các bên hoàn toàn không cần tự nguyện","Nội dung và mục đích không vi phạm điều cấm của luật, không trái đạo đức xã hội","Chỉ cần thỏa thuận miệng trong mọi trường hợp","Một bên có thể tự ý thay đổi mọi điều khoản"],a:1,e:"Giao dịch dân sự có hiệu lực khi đáp ứng các điều kiện theo Bộ luật Dân sự, gồm chủ thể phù hợp, tự nguyện và mục đích/nội dung hợp pháp."},
{q:"Cạnh tranh lành mạnh trên thị trường có tác động tích cực nào?",o:["Khuyến khích đổi mới, nâng cao chất lượng và hiệu quả","Bảo đảm mọi doanh nghiệp có lợi nhuận như nhau","Xóa bỏ hoàn toàn nhu cầu quản lí thị trường","Cho phép doanh nghiệp cung cấp thông tin gian dối"],a:0,e:"Cạnh tranh lành mạnh tạo động lực đổi mới, cải thiện chất lượng và nâng cao hiệu quả sản xuất kinh doanh."},
{q:"Khi phát hiện thông tin lừa đảo trên mạng, cách ứng xử phù hợp là gì?",o:["Chia sẻ ngay để nhiều người biết mà không kiểm chứng","Chuyển tiền để xác minh lời mời","Không cung cấp dữ liệu cá nhân, kiểm chứng và báo cho nền tảng/cơ quan phù hợp","Gửi mật khẩu để nhờ người lạ xử lí"],a:2,e:"Cần bảo vệ dữ liệu cá nhân, kiểm chứng nguồn tin và báo cáo nội dung có dấu hiệu lừa đảo."},
{q:"Thuế có vai trò quan trọng nào đối với Nhà nước và xã hội?",o:["Chỉ làm tăng thu nhập của doanh nghiệp","Là nguồn thu chủ yếu của ngân sách nhà nước, góp phần thực hiện các nhiệm vụ công","Thay thế mọi khoản thu khác của người dân","Chỉ được dùng cho các dự án tư nhân"],a:1,e:"Thuế là nguồn thu quan trọng của ngân sách nhà nước, phục vụ chi tiêu công và các mục tiêu kinh tế - xã hội."}
],
[
{q:"Một cơ sở kinh doanh phát hiện sản phẩm có lỗi ảnh hưởng đến người mua. Cách xử lí có trách nhiệm nhất là gì?",o:["Tiếp tục bán và không thông báo","Xóa phản hồi của khách hàng","Thông báo rõ ràng, khắc phục/thu hồi theo quy định và bảo vệ quyền lợi người tiêu dùng","Đổ lỗi cho khách hàng trong mọi trường hợp"],a:2,e:"Cơ sở kinh doanh cần minh bạch, khắc phục hậu quả và thực hiện trách nhiệm với người tiêu dùng theo quy định."},
{q:"Công dân có thể góp phần xây dựng ngân sách nhà nước bằng cách nào?",o:["Kê khai trung thực và thực hiện nghĩa vụ thuế theo quy định","Tự ý giữ lại mọi khoản thuế phải nộp","Làm giả hóa đơn để giảm nghĩa vụ","Khuyến khích người khác trốn thuế"],a:0,e:"Thực hiện nghĩa vụ thuế trung thực, đúng quy định góp phần tạo nguồn thu cho ngân sách nhà nước."},
{q:"Một người lao động bị tai nạn trong quá trình làm việc. Nội dung nào liên quan trực tiếp đến bảo đảm an sinh cho người lao động?",o:["Chính sách bảo hiểm và chế độ hỗ trợ theo quy định pháp luật","Quy định về quảng cáo thương mại","Quy tắc đặt tên nhãn hiệu","Chính sách khuyến mại của cửa hàng"],a:0,e:"Bảo hiểm và các chế độ hỗ trợ liên quan giúp bảo vệ người lao động trước rủi ro theo điều kiện pháp luật quy định."},
{q:"Doanh nghiệp quảng cáo công dụng sản phẩm vượt xa sự thật nhằm thu hút khách hàng. Hành vi này có thể xâm phạm điều gì?",o:["Quyền được tiếp cận thông tin chính xác của người tiêu dùng và quy định pháp luật","Quyền nghỉ ngơi của người lao động בלבד","Nguyên tắc tự do học tập","Quyền lập hội của công dân"],a:0,e:"Thông tin quảng cáo sai lệch có thể gây nhầm lẫn cho người tiêu dùng và vi phạm quy định về quảng cáo, bảo vệ người tiêu dùng."},
{q:"Một học sinh thấy bạn đăng thông tin riêng tư của người khác lên mạng để trêu chọc. Nên làm gì?",o:["Chia sẻ lại để tăng lượt xem","Bình luận xúc phạm thêm","Khuyên bạn gỡ nội dung, tôn trọng quyền riêng tư và báo người lớn đáng tin cậy nếu cần","Lưu lại rồi phát tán rộng hơn"],a:2,e:"Tôn trọng quyền riêng tư và ứng xử có trách nhiệm trên môi trường số là cần thiết; nên ngăn việc phát tán thông tin gây hại."},
{q:"Khi giá một mặt hàng tăng trong điều kiện các yếu tố khác không đổi, người tiêu dùng thường có xu hướng nào?",o:["Nhu cầu mua luôn tăng vô hạn","Giảm lượng mua hoặc tìm sản phẩm thay thế","Không bao giờ thay đổi lựa chọn","Nhà sản xuất bắt buộc ngừng hoạt động"],a:1,e:"Theo quy luật cầu, khi giá tăng và các yếu tố khác không đổi, lượng cầu thường giảm."},
{q:"Hành vi nào thể hiện quyền tự do kinh doanh đúng pháp luật?",o:["Kinh doanh ngành nghề bị cấm","Thành lập và hoạt động kinh doanh đáp ứng điều kiện, thủ tục pháp luật quy định","Trốn tránh mọi nghĩa vụ với người lao động","Dùng hàng giả để tăng lợi nhuận"],a:1,e:"Tự do kinh doanh được thực hiện trong khuôn khổ pháp luật, với các điều kiện và nghĩa vụ tương ứng."},
{q:"Một người bị phân biệt đối xử khi tuyển dụng chỉ vì giới tính dù đáp ứng yêu cầu công việc. Vấn đề pháp lí nổi bật là gì?",o:["Bình đẳng giới và bình đẳng trong cơ hội lao động","Quyền sở hữu trí tuệ","Nghĩa vụ bảo vệ môi trường biển","Quyền tự do tín ngưỡng"],a:0,e:"Phân biệt đối xử về giới trong tuyển dụng có thể xâm phạm nguyên tắc bình đẳng giới và các quy định về lao động."},
{q:"Để quản lí chi tiêu cá nhân hiệu quả, bước nào nên thực hiện trước?",o:["Vay tiền để mua mọi thứ mong muốn","Theo dõi thu nhập, phân loại nhu cầu và lập kế hoạch chi tiêu","Chi hết thu nhập rồi mới ghi chép","Không cần xác định mục tiêu tài chính"],a:1,e:"Lập kế hoạch bắt đầu từ việc nắm rõ thu nhập, chi tiêu, ưu tiên và mục tiêu tài chính."},
{q:"Một công dân không đồng ý với quyết định hành chính ảnh hưởng trực tiếp đến quyền lợi hợp pháp của mình. Người đó nên làm gì?",o:["Dùng bạo lực để giải quyết","Đăng thông tin chưa kiểm chứng về người ra quyết định","Thực hiện quyền khiếu nại theo trình tự, thủ tục pháp luật quy định khi đủ điều kiện","Tự ý phá hoại tài sản công"],a:2,e:"Khi có căn cứ cho rằng quyết định/hành vi hành chính xâm phạm quyền, lợi ích hợp pháp, công dân có thể khiếu nại theo pháp luật."}
],
[
{q:"Nội dung nào mô tả đúng vai trò của thị trường?",o:["Kết nối người mua và người bán, truyền tải thông tin và điều tiết hoạt động trao đổi","Chỉ là nơi Nhà nước thu thuế","Chỉ tồn tại khi không có cạnh tranh","Không ảnh hưởng đến quyết định sản xuất"],a:0,e:"Thị trường kết nối các chủ thể kinh tế, cung cấp tín hiệu về giá cả, cung cầu và ảnh hưởng đến quyết định sản xuất, tiêu dùng."},
{q:"Một doanh nghiệp muốn phát triển bền vững nên làm gì?",o:["Tối đa hóa lợi nhuận bằng mọi cách","Bỏ qua an toàn lao động để giảm chi phí","Kết hợp hiệu quả kinh tế với trách nhiệm xã hội và bảo vệ môi trường","Che giấu mọi tác động tiêu cực"],a:2,e:"Phát triển bền vững đòi hỏi cân bằng mục tiêu kinh tế, xã hội và môi trường."},
{q:"Công dân thực hiện quyền tham gia quản lí nhà nước và xã hội bằng cách nào?",o:["Tham gia góp ý, kiến nghị và thực hiện các quyền theo quy định pháp luật","Phá hoại tài liệu của cơ quan nhà nước","Ép buộc người khác đồng ý với ý kiến cá nhân","Lan truyền thông tin sai sự thật"],a:0,e:"Công dân có thể tham gia quản lí nhà nước và xã hội thông qua các hình thức hợp pháp như góp ý, kiến nghị, giám sát."},
{q:"Điều nào là ví dụ về trách nhiệm pháp lí?",o:["Được khen vì giúp đỡ bạn học","Phải chịu hậu quả pháp lí theo quy định khi có hành vi vi phạm pháp luật","Tự đặt ra quyền miễn trừ cho mình","Được tự ý bỏ qua mọi nghĩa vụ"],a:1,e:"Trách nhiệm pháp lí là hậu quả bất lợi mà chủ thể vi phạm phải gánh chịu theo quy định pháp luật."},
{q:"Khi ký hợp đồng lao động, người lao động cần quan tâm điều gì?",o:["Chỉ quan tâm tên công ty","Đọc và hiểu công việc, tiền lương, thời giờ làm việc, quyền và nghĩa vụ của các bên","Bỏ qua điều khoản về quyền lợi","Giao toàn bộ giấy tờ cá nhân cho người tuyển dụng không rõ danh tính"],a:1,e:"Nắm rõ nội dung hợp đồng giúp người lao động hiểu quyền, nghĩa vụ và hạn chế rủi ro tranh chấp."},
{q:"Hành vi nào góp phần bảo vệ môi trường trong tiêu dùng?",o:["Ưu tiên sản phẩm có thể tái sử dụng, giảm lãng phí và phân loại rác phù hợp","Dùng đồ một lần trong mọi tình huống","Thải pin đã qua sử dụng vào rác sinh hoạt không phân loại","Mua nhiều hơn nhu cầu để dự trữ vô hạn"],a:0,e:"Giảm rác thải, tái sử dụng và phân loại chất thải đúng cách góp phần giảm tác động môi trường."},
{q:"Một người lập kế hoạch khởi nghiệp cần đánh giá yếu tố nào?",o:["Nhu cầu khách hàng, nguồn lực, chi phí, rủi ro và tính khả thi","Chỉ cần có tên thương hiệu hấp dẫn","Không cần nghiên cứu thị trường","Bỏ qua quy định pháp luật về ngành nghề"],a:0,e:"Kế hoạch kinh doanh khả thi cần phân tích thị trường, nguồn lực, chi phí, rủi ro và các điều kiện pháp lí."},
{q:"Quyền sở hữu tài sản cho phép chủ sở hữu thực hiện những quyền cơ bản nào theo quy định pháp luật?",o:["Chiếm hữu, sử dụng và định đoạt tài sản trong giới hạn pháp luật","Sử dụng tài sản để xâm phạm quyền người khác","Tự ý chiếm tài sản của người khác","Không chịu bất kì giới hạn pháp luật nào"],a:0,e:"Quyền sở hữu gồm quyền chiếm hữu, sử dụng và định đoạt, được thực hiện theo quy định pháp luật."},
{q:"Một người nhận được tin nhắn yêu cầu cung cấp mã xác thực ngân hàng để nhận quà. Cách an toàn nhất là gì?",o:["Gửi mã ngay để không mất quà","Chia sẻ mã cho nhóm chat","Không cung cấp mã, kiểm tra qua kênh chính thức của ngân hàng","Gửi cả mật khẩu để xác minh"],a:2,e:"Mã xác thực là thông tin bảo mật; không chia sẻ qua tin nhắn hoặc cho người không đáng tin cậy."},
{q:"Vì sao cần tuân thủ pháp luật trong đời sống xã hội?",o:["Để bảo vệ quyền, lợi ích hợp pháp và duy trì trật tự, an toàn xã hội","Để mọi người có quyền giống hệt nhau trong mọi hoàn cảnh","Để loại bỏ mọi trách nhiệm cá nhân","Để chỉ cơ quan nhà nước phải tuân thủ quy tắc"],a:0,e:"Tuân thủ pháp luật giúp bảo vệ quyền lợi hợp pháp, bảo đảm công bằng và duy trì trật tự xã hội."}
]
];

const letters = ["A","B","C","D"];
const setupView = document.getElementById("setupView"), testView = document.getElementById("testView"), resultView = document.getElementById("resultView");
let selectedExam = 0, current = 0, answers = [], flagged = [], questions = [], secondsLeft = 1200, duration = 20, timerId = null, startedAt = 0, elapsedSeconds = 0, toastId = null;

document.querySelectorAll(".exam-card").forEach(card => card.addEventListener("click", () => {
  document.querySelectorAll(".exam-card").forEach(c => c.classList.remove("selected"));
  card.classList.add("selected"); selectedExam = Number(card.dataset.exam);
}));
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  showToast(document.body.classList.contains("light") ? "Đã chuyển sang giao diện sáng" : "Đã chuyển sang giao diện tối");
});
document.getElementById("startBtn").addEventListener("click", startExam);
document.getElementById("prevBtn").addEventListener("click", () => goQuestion(current - 1));
document.getElementById("nextBtn").addEventListener("click", () => goQuestion(current + 1));
document.getElementById("flagBtn").addEventListener("click", toggleFlag);
document.getElementById("submitBtn").addEventListener("click", openSubmitConfirm);
document.getElementById("cancelSubmit").addEventListener("click", () => document.getElementById("confirmModal").classList.add("hidden"));
document.getElementById("confirmSubmit").addEventListener("click", () => { document.getElementById("confirmModal").classList.add("hidden"); submitExam(false); });
document.getElementById("quitBtn").addEventListener("click", () => {
  if(confirm("Thoát bài thi? Tiến trình hiện tại sẽ không được lưu.")){ stopTimer(); testView.classList.add("hidden"); setupView.classList.remove("hidden"); window.scrollTo({top:0,behavior:"smooth"}); }
});
document.getElementById("retryBtn").addEventListener("click", startExam);
document.getElementById("homeBtn").addEventListener("click", () => { resultView.classList.add("hidden"); setupView.classList.remove("hidden"); window.scrollTo({top:0,behavior:"smooth"}); });

function startExam(){
  duration = Number(document.getElementById("durationSelect").value);
  questions = banks[selectedExam].map(q => ({...q, o:[...q.o]}));
  // Randomize the answer positions while keeping the key aligned.
  questions = questions.map(q => {
    const pairs = q.o.map((text,i)=>({text,correct:i===q.a}));
    for(let i=pairs.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pairs[i],pairs[j]]=[pairs[j],pairs[i]];}
    return {...q,o:pairs.map(p=>p.text),a:pairs.findIndex(p=>p.correct)};
  });
  current=0; answers=Array(questions.length).fill(null); flagged=Array(questions.length).fill(false);
  secondsLeft=duration*60; startedAt=Date.now(); elapsedSeconds=0;
  document.getElementById("currentExamTitle").textContent=`Đề luyện tập số 0${selectedExam+1}`;
  setupView.classList.add("hidden"); resultView.classList.add("hidden"); testView.classList.remove("hidden");
  renderQuestion(); renderQuestionGrid(); updateProgress(); updateTimer();
  stopTimer(); timerId=setInterval(()=>{secondsLeft--;updateTimer();if(secondsLeft<=0){stopTimer();submitExam(true);}},1000);
  window.scrollTo({top:0,behavior:"smooth"});
}
function stopTimer(){if(timerId){clearInterval(timerId);timerId=null;}}
function updateTimer(){
  const m=Math.floor(Math.max(0,secondsLeft)/60),s=Math.max(0,secondsLeft)%60;
  const el=document.getElementById("timer");el.textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
  el.classList.toggle("warning",secondsLeft<=60);
}
function renderQuestion(){
  const q=questions[current];
  document.getElementById("questionNumber").textContent=`CÂU ${String(current+1).padStart(2,"0")} / ${questions.length}`;
  document.getElementById("pageCount").textContent=`${String(current+1).padStart(2,"0")} / ${questions.length}`;
  document.getElementById("questionText").textContent=q.q;
  document.getElementById("flagBtn").classList.toggle("flagged",flagged[current]);
  document.getElementById("flagBtn").textContent=flagged[current]?"⚑ Đã đánh dấu":"⚑ Đánh dấu xem lại";
  const list=document.getElementById("optionsList");list.innerHTML="";
  q.o.forEach((option,i)=>{
    const b=document.createElement("button");b.className="option"+(answers[current]===i?" selected":"");
    const letter=document.createElement("span");letter.className="option-letter";letter.textContent=letters[i];
    const text=document.createElement("span");text.textContent=option;
    b.append(letter,text);b.addEventListener("click",()=>{answers[current]=i;renderQuestion();renderQuestionGrid();updateProgress();});list.appendChild(b);
  });
  document.getElementById("prevBtn").disabled=current===0;
  document.getElementById("prevBtn").style.opacity=current===0?".45":"1";
  document.getElementById("nextBtn").innerHTML=current===questions.length-1?'Đến câu đầu <span>↺</span>':'Câu tiếp theo <span>→</span>';
  renderQuestionGrid();
}
function renderQuestionGrid(){
  const grid=document.getElementById("questionGrid");grid.innerHTML="";
  questions.forEach((q,i)=>{const b=document.createElement("button");b.className="q-number"+(answers[i]!==null?" done":"")+(current===i?" current":"")+(flagged[i]?" flagged":"");b.textContent=i+1;b.addEventListener("click",()=>goQuestion(i));grid.appendChild(b);});
  document.getElementById("answeredCount").textContent=`${answers.filter(a=>a!==null).length}/${questions.length}`;
}
function updateProgress(){
  const n=answers.filter(a=>a!==null).length,p=Math.round(n/questions.length*100);
  document.getElementById("progressText").textContent=`Đã trả lời ${n}/${questions.length} câu`;
  document.getElementById("progressPercent").textContent=`${p}%`;
  document.getElementById("progressBar").style.width=p+"%";
}
function goQuestion(n){if(n<0)return;if(n>=questions.length)n=0;current=n;renderQuestion();window.scrollTo({top:0,behavior:"smooth"});}
function toggleFlag(){flagged[current]=!flagged[current];renderQuestion();showToast(flagged[current]?"Đã đánh dấu câu cần xem lại":"Đã bỏ đánh dấu câu hỏi");}
function openSubmitConfirm(){
  const blank=answers.filter(a=>a===null).length;
  document.getElementById("confirmText").textContent=blank?`Bạn còn ${blank} câu chưa trả lời. Bạn vẫn có thể nộp bài và xem kết quả sau đó.`:"Bạn đã trả lời tất cả câu hỏi. Xác nhận nộp bài để xem điểm và lời giải.";
  document.getElementById("confirmModal").classList.remove("hidden");
}
function submitExam(auto){
  stopTimer();elapsedSeconds=Math.min(duration*60,Math.max(0,Date.now()-startedAt)/1000)|0;
  const correct=answers.reduce((n,a,i)=>n+(a===questions[i].a?1:0),0),blank=answers.filter(a=>a===null).length,score=correct/questions.length*10;
  document.getElementById("scoreValue").innerHTML=`${score.toFixed(1)}<small>/10</small>`;
  document.getElementById("scoreBar").style.width=(score*10)+"%";
  document.getElementById("correctValue").textContent=`${correct}/${questions.length}`;
  document.getElementById("blankValue").textContent=blank;
  document.getElementById("elapsedValue").textContent=`${String(Math.floor(elapsedSeconds/60)).padStart(2,"0")}:${String(elapsedSeconds%60).padStart(2,"0")}`;
  document.getElementById("resultTitle").textContent=score>=8?"Rất tốt! Bạn đang tiến bộ.":score>=5?"Hoàn thành bài thi! Hãy xem lại câu sai.":"Đừng nản lòng — cùng ôn lại kiến thức nhé!";
  document.getElementById("resultSubtitle").textContent=auto?"Đã tự động nộp bài vì hết thời gian.":"Bài thi đã được nộp và chấm điểm.";
  const review=document.getElementById("reviewList");review.innerHTML="";
  questions.forEach((q,i)=>{
    const ok=answers[i]===q.a,item=document.createElement("article");item.className="review-item "+(ok?"correct":"incorrect");
    const status=document.createElement("span");status.className="review-status";status.textContent=ok?"✓ TRẢ LỜI ĐÚNG":answers[i]===null?"— CHƯA TRẢ LỜI":"✕ TRẢ LỜI CHƯA ĐÚNG";
    const title=document.createElement("h3");title.textContent=`Câu ${i+1}. ${q.q}`;
    const your=document.createElement("p");your.className="review-answer";your.innerHTML="<strong>Bạn chọn:</strong> ";your.append(document.createTextNode(answers[i]===null?"Chưa trả lời":`${letters[answers[i]]}. ${q.o[answers[i]]}`));
    const correctLine=document.createElement("p");correctLine.className="review-answer";correctLine.innerHTML="<strong>Đáp án đúng:</strong> ";correctLine.append(document.createTextNode(`${letters[q.a]}. ${q.o[q.a]}`));
    const exp=document.createElement("div");exp.className="explanation";exp.textContent="Giải thích: "+q.e;
    item.append(status,title,your,correctLine,exp);review.appendChild(item);
  });
  testView.classList.add("hidden");resultView.classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"});
}
function showToast(message){const t=document.getElementById("toast");t.textContent=message;t.classList.add("show");clearTimeout(toastId);toastId=setTimeout(()=>t.classList.remove("show"),2100);}
