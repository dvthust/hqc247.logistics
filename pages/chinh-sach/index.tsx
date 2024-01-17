import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import {chakra, Heading, Text} from '@chakra-ui/react';
import BreadcrumbContainer from '@/components/BreadcrumbContainer';
import {ReactElement} from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';

export default function PrivacyPolicyPage() {
  return <>
    <Head>
      <title>Chính sách và quyền riêng tư</title>
    </Head>
    <BreadcrumbContainer
        d={{base: 'none', lg: 'flex'}}
        px={'15px'}
        items={[
          {name: `Chính sách và quyền riêng tư`},
        ]}
    />
    <chakra.div>
      <chakra.div
          maxW="1200px"
          mx="auto"
          mb={{base: 4, lg: 8}}
      >
        <chakra.div
            display={'flex'}
            mt={{base: 4, lg: 6}}
            flexDirection={{base: 'column', lg: 'row'}}
            className="app-wrapper"
        >
          <chakra.div
              px={{base: 0, lg: '15px'}}
              maxW={'861px'}
              w={'100%'}
              className="content-wrapper"
          >
            <chakra.div
                p={{base: '15px 20px', lg: '40px 60px'}}
                bgColor={'#fff'}
                boxShadow={'0 3px 5px 0 rgb(0 1 1 / 10%)'}
                className={'post-wrapper'}
            >
              <Heading as="h1" size="lg">Chính sách và quyền riêng tư</Heading>
              <chakra.div className={'post-content'} pt={'15px'}>
                <Text>
                  Hqc247 Logistics (“chúng tôi” hoặc “chúng tôi” hoặc “của
                  chúng tôi”) tôn trọng quyền riêng tư của người dùng của chúng
                  tôi (“người dùng” hoặc “bạn”). Chính sách Bảo mật này giải
                  thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ
                  thông tin của bạn khi bạn truy cập ứng dụng di động của chúng
                  tôi (“Ứng dụng”). Vui lòng đọc kĩ chính sách bảo mật này. NẾU
                  BẠN KHÔNG ĐỒNG Ý VỚI CÁC ĐIỀU KHOẢN CỦA CHÍNH SÁCH BẢO MẬT
                  NÀY, VUI LÒNG KHÔNG TRUY CẬP ỨNG DỤNG.
                  Chúng tôi có quyền thực hiện các thay đổi đối với Chính sách
                  Bảo mật này vào bất kỳ lúc nào và vì bất kỳ lý do gì. Chúng
                  tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách cập
                  nhật ngày “Cập nhật lần cuối” của Chính sách Bảo mật này. Bạn
                  được khuyến khích xem xét định kỳ Chính sách quyền riêng tư
                  này để được cập nhật thông tin. Bạn sẽ được coi là đã được
                  thông báo, sẽ tuân theo và sẽ được coi là đã chấp nhận các
                  thay đổi trong bất kỳ Chính sách Quyền riêng tư sửa đổi nào
                  bằng cách bạn tiếp tục sử dụng Ứng dụng sau ngày Chính sách
                  Quyền riêng tư sửa đổi đó được đăng.

                  Chính sách Bảo mật này không áp dụng cho cửa hàng trực tuyến /
                  di động của bên thứ ba mà từ đó bạn cài đặt Ứng dụng hoặc
                  thanh toán, bao gồm mọi vật phẩm ảo trong trò chơi, cũng có
                  thể thu thập và sử dụng dữ liệu về bạn. Chúng tôi không chịu
                  trách nhiệm về bất kỳ dữ liệu nào được thu thập bởi bất kỳ bên
                  thứ ba nào như vậy.
                </Text>

                <Heading size={'sm'} mt={4}>THU THẬP THÔNG TIN CỦA BẠN</Heading>
                <Text mt={2}>
                  Chúng tôi có thể thu thập thông tin về bạn theo nhiều cách
                  khác nhau. Thông tin chúng tôi có thể thu thập qua Ứng dụng
                  tùy thuộc vào nội dung và tài liệu bạn sử dụng, và bao
                  gồm:
                </Text>

                <Text fontWeight={600} mt={4}>Dữ liệu cá nhân</Text>
                <Text>
                  Thông tin cá nhân và các thông tin nhận dạng cá nhân khác
                  (chẳng hạn như tên và địa chỉ email của bạn) mà bạn tự nguyện
                  cung cấp cho chúng tôi khi chọn tham gia vào các hoạt động
                  khác nhau liên quan đến Ứng dụng, chẳng hạn như trò chuyện,
                  đăng ký tài khoản, tạo đơn hàng hoặc yêu cầu giao hàng thì các
                  thông tin này đều được chúng tôi bảo mật giúp bạn, dữ liệu này
                  chỉ để phục vụ việc vận chuyển hàng hóa thông qua các thông
                  tin đến từ đơn hàng và tài khoản của bạn.
                </Text>

                <Text fontWeight={600} mt={4}>Dữ liệu phát sinh</Text>
                <Text>
                  Thông tin mà máy chủ của chúng tôi tự động thu thập khi bạn
                  truy cập Ứng dụng, chẳng hạn như các hành động gốc của bạn
                  không thể tách rời với Ứng dụng, bao gồm lên đơn hàng hoặc trả
                  lơi một khiếu nại ký gửi, cũng như các tương tác khác với Ứng
                  dụng và những người dùng khác thông qua nhật ký máy chủ các
                  tập tin.
                </Text>

                <Text fontWeight={600} mt={4}>Thông tin Vị trí Địa lý</Text>
                <Text>
                  Chúng tôi có thể yêu cầu quyền truy cập hoặc quyền và theo dõi
                  thông tin dựa trên vị trí từ thiết bị di động của bạn, liên
                  tục hoặc trong khi bạn đang sử dụng Ứng dụng, để cung cấp các
                  dịch vụ dựa trên vị trí. Nếu bạn muốn thay đổi quyền truy cập
                  hoặc quyền của chúng tôi, bạn có thể làm như vậy trong cài đặt
                  thiết bị của mình.
                </Text>

                <Text fontWeight={600} mt={4}>Quyền truy cập thiết bị di
                  động</Text>
                <Text>
                  Chúng tôi có thể yêu cầu quyền truy cập hoặc quyền đối với một
                  số tính năng nhất định từ thiết bị di động của bạn, bao gồm
                  Bluetooth, Danh sách liên hệ, Máy ảnh, Micrô, Vị trí của thiết
                  bị di động của bạn. Nếu bạn muốn thay đổi quyền truy cập hoặc
                  quyền của chúng tôi, bạn có thể làm như vậy trong cài đặt
                  thiết bị của mình.
                </Text>

                <Text fontWeight={600} mt={4}>Dữ liệu thiết bị di động</Text>
                <Text>
                  Thông tin thiết bị như số ID thiết bị di động, kiểu máy và nhà
                  sản xuất, phiên bản hệ điều hành, số điện thoại, quốc gia, vị
                  trí và bất kỳ dữ liệu nào khác mà bạn chọn cung cấp.
                </Text>

                <Text fontWeight={600} mt={4}>Đẩy thông báo</Text>
                <Text>
                  Chúng tôi có thể yêu cầu gửi cho bạn các thông báo đẩy liên
                  quan đến tài khoản của bạn hoặc Ứng dụng. Nếu bạn muốn chọn
                  không nhận các loại liên lạc này, bạn có thể tắt chúng trong
                  cài đặt của thiết bị.
                </Text>

                <Text fontWeight={600} mt={4}>Dữ liệu của bên thứ ba</Text>
                <Text>
                  Thông tin từ bên thứ ba, chẳng hạn như thông tin cá nhân hoặc
                  bạn bè trong mạng, nếu bạn kết nối tài khoản của mình với bên
                  thứ ba và cấp cho Ứng dụng quyền truy cập thông tin này.
                </Text>

                <Text fontWeight={600} mt={4}>Dữ liệu từ các cuộc thi, quà tặng
                  và khảo sát</Text>
                <Text>
                  Thông tin cá nhân và thông tin khác mà bạn có thể cung cấp khi
                  tham gia các cuộc thi hoặc quà tặng và / hoặc trả lời các cuộc
                  khảo sát.
                </Text>

                <Text as="h1" size="lg" mt={4}>SỬ DỤNG THÔNG TIN CỦA BẠN</Text>
                <Text>
                  Có thông tin chính xác về bạn cho phép chúng tôi cung cấp cho
                  bạn trải nghiệm mượt mà, hiệu quả và tùy chỉnh. Cụ thể, chúng
                  tôi có thể sử dụng thông tin thu thập được về bạn qua Ứng dụng
                  để:

                  Biên dịch dữ liệu thống kê ẩn danh và phân tích để sử dụng
                  trong nội bộ hoặc với các bên thứ ba.
                  Tạo và quản lý tài khoản của bạn.
                  Cung cấp quảng cáo được nhắm mục tiêu, phiếu giảm giá, bản tin
                  và các thông tin khác liên quan đến các chương trình khuyến
                  mãi và Ứng dụng cho bạn.
                  Gửi email cho bạn về tài khoản hoặc đơn đặt hàng của bạn.
                  Bật giao tiếp giữa người dùng với người dùng.
                  Thực hiện và quản lý các giao dịch mua, đơn đặt hàng, thanh
                  toán và các giao dịch khác liên quan đến Ứng dụng.
                  Tạo hồ sơ cá nhân về bạn để thực hiện các lượt truy cập Ứng
                  dụng trong tương lai được cá nhân hóa hơn.
                  Tăng hiệu quả và hoạt động của Ứng dụng.
                  Theo dõi và phân tích việc sử dụng và xu hướng để cải thiện
                  trải nghiệm của bạn với Ứng dụng.
                  Thông báo cho bạn về các cập nhật đối với Ứng dụng.
                  Cung cấp các sản phẩm, dịch vụ, ứng dụng di động và / hoặc các
                  đề xuất mới cho bạn.
                  Thực hiện các hoạt động kinh doanh khác khi cần thiết.
                  Ngăn chặn các giao dịch gian lận, giám sát chống trộm cắp và
                  bảo vệ chống lại hoạt động tội phạm.
                  Xử lý các khoản thanh toán và hoàn lại tiền.
                  Yêu cầu phản hồi và liên hệ với bạn về việc bạn sử dụng Ứng
                  dụng.
                  Giải quyết tranh chấp và khắc phục sự cố.
                  Đáp ứng các yêu cầu về sản phẩm và dịch vụ khách hàng.
                  Gửi cho bạn một bản tin.
                  Xin hỗ trợ cho Ứng dụng
                </Text>

                <Text as="h1" size="lg" mt={4}>CÔNG BỐ THÔNG TIN CỦA BẠN</Text>
                <Text>
                  Chúng tôi có thể chia sẻ thông tin chúng tôi đã thu thập được
                  về bạn trong một số trường hợp nhất định. Thông tin của bạn có
                  thể được tiết lộ như sau:

                  Theo luật hoặc để bảo vệ quyền
                  Nếu chúng tôi tin rằng việc tiết lộ thông tin về bạn là cần
                  thiết để đáp ứng quy trình pháp lý, để điều tra hoặc khắc phục
                  các vi phạm tiềm ẩn đối với chính sách của chúng tôi hoặc để
                  bảo vệ quyền, tài sản và sự an toàn của người khác, chúng tôi
                  có thể chia sẻ thông tin của bạn khi được cho phép hoặc yêu
                  cầu bởi bất kỳ luật, quy tắc hoặc quy định hiện hành nào. Điều
                  này bao gồm việc trao đổi thông tin với các đơn vị khác để bảo
                  vệ chống gian lận và giảm thiểu rủi ro tín dụng.


                  Nhà cung cấp dịch vụ bên thứ ba
                  Chúng tôi có thể chia sẻ thông tin của bạn với các bên thứ ba
                  thực hiện các dịch vụ cho chúng tôi hoặc thay mặt chúng tôi,
                  bao gồm xử lý thanh toán, phân tích dữ liệu, gửi email, dịch
                  vụ lưu trữ, dịch vụ khách hàng và hỗ trợ tiếp thị.


                  Truyền thông Tiếp thị
                  Với sự đồng ý của bạn hoặc với cơ hội để bạn rút lại sự đồng
                  ý, chúng tôi có thể chia sẻ thông tin của bạn với các bên thứ
                  ba cho các mục đích tiếp thị, khi được pháp luật cho phép.


                  Tương tác với những người dùng khác
                  Nếu bạn tương tác với những người dùng khác của Ứng dụng,
                  những người dùng đó có thể thấy tên, ảnh hồ sơ và mô tả về
                  hoạt động của bạn, bao gồm gửi lời mời cho người dùng khác,
                  trò chuyện với người dùng khác, thích bài đăng, theo dõi blog.


                  Nhà quảng cáo bên thứ ba
                  Chúng tôi có thể sử dụng các công ty quảng cáo của bên thứ ba
                  để phân phát quảng cáo khi bạn truy cập Ứng dụng. Các công ty
                  này có thể sử dụng thông tin về các lần bạn truy cập Ứng dụng
                  và các trang web khác có trong cookie web để cung cấp quảng
                  cáo về hàng hóa và dịch vụ mà bạn quan tâm.


                  Chi nhánh
                  Chúng tôi có thể chia sẻ thông tin của bạn với các chi nhánh
                  của chúng tôi, trong trường hợp đó, chúng tôi sẽ yêu cầu các
                  chi nhánh đó tuân theo Chính sách Bảo mật này. Các chi nhánh
                  bao gồm công ty mẹ của chúng tôi và bất kỳ công ty con nào,
                  đối tác liên doanh hoặc các công ty khác mà chúng tôi kiểm
                  soát hoặc nằm dưới sự kiểm soát chung của chúng tôi.


                  Đối tác kinh doanh
                  Chúng tôi có thể chia sẻ thông tin của bạn với các đối tác
                  kinh doanh của chúng tôi để cung cấp cho bạn một số sản phẩm,
                  dịch vụ hoặc chương trình khuyến mãi.


                  Liên hệ trên mạng xã hội
                  Nếu bạn kết nối với Ứng dụng thông qua mạng xã hội, các liên
                  hệ của bạn trên mạng xã hội sẽ thấy tên, ảnh hồ sơ và mô tả về
                  hoạt động của bạn.


                  Các bên thứ ba khác
                  Chúng tôi có thể chia sẻ thông tin của bạn với các nhà quảng
                  cáo và nhà đầu tư nhằm mục đích thực hiện phân tích kinh doanh
                  chung. Chúng tôi cũng có thể chia sẻ thông tin của bạn với các
                  bên thứ ba như vậy cho các mục đích tiếp thị, khi được pháp
                  luật cho phép.


                  Bán hoặc phá sản
                  Nếu chúng tôi tổ chức lại hoặc bán tất cả hoặc một phần tài
                  sản của mình, trải qua một cuộc sáp nhập hoặc được một pháp
                  nhân khác mua lại, chúng tôi có thể chuyển thông tin của bạn
                  cho pháp nhân kế thừa. Nếu chúng tôi ngừng kinh doanh hoặc phá
                  sản, thông tin của bạn sẽ là tài sản được chuyển nhượng hoặc
                  mua lại bởi một bên thứ ba. Bạn xác nhận rằng việc chuyển giao
                  như vậy có thể xảy ra và người được chuyển nhượng có thể từ
                  chối các cam kết mà chúng tôi đã đưa ra trong Chính sách Bảo
                  mật này. Chúng tôi không chịu trách nhiệm về các hành động của
                  các bên thứ ba mà bạn chia sẻ dữ liệu cá nhân hoặc dữ liệu
                  nhạy cảm và chúng tôi không có quyền quản lý hoặc kiểm soát
                  các yêu cầu của bên thứ ba. Nếu bạn không còn muốn nhận thư
                  từ.
                </Text>

                <Text as="h1" size="lg" mt={4}>CÔNG NGHỆ THEO DÕI</Text>
                <Text>
                  Cookie và Web Beacons
                  Chúng tôi có thể sử dụng cookie, đèn hiệu web, pixel theo dõi
                  và các công nghệ theo dõi khác trên Ứng dụng để giúp tùy chỉnh
                  Ứng dụng và cải thiện trải nghiệm của bạn. Khi bạn truy cập
                  Ứng dụng, thông tin cá nhân của bạn không được thu thập thông
                  qua việc sử dụng công nghệ theo dõi. Hầu hết các trình duyệt
                  được đặt để chấp nhận cookie theo mặc định. Bạn có thể xóa
                  hoặc từ chối cookie, nhưng lưu ý rằng hành động đó có thể ảnh
                  hưởng đến tính khả dụng và chức năng của Ứng dụng. Bạn không
                  thể từ chối báo hiệu web. Tuy nhiên, chúng có thể không hiệu
                  quả bằng cách từ chối tất cả cookie hoặc bằng cách sửa đổi cài
                  đặt trình duyệt web của bạn để thông báo cho bạn mỗi khi
                  cookie được đấu thầu.


                  Quảng cáo dựa trên Internet
                  Ngoài ra, chúng tôi có thể sử dụng phần mềm của bên thứ ba để
                  phân phát quảng cáo trên Ứng dụng, triển khai các chiến dịch
                  tiếp thị qua email và quản lý các sáng kiến ​​tiếp thị tương
                  tác khác. Phần mềm của bên thứ ba này có thể sử dụng cookie
                  hoặc công nghệ theo dõi tương tự để giúp quản lý và tối ưu hóa
                  trải nghiệm trực tuyến của bạn với chúng tôi. Để biết thêm
                  thông tin về việc chọn không tham gia quảng cáo dựa trên sở
                  thích, hãy truy cập Công cụ chọn không tham gia Sáng kiến
                  ​​quảng cáo mạng hoặc Công cụ chọn không tham gia của Liên
                  minh quảng cáo kỹ thuật số.


                  Phân tích trang web
                  Chúng tôi cũng có thể hợp tác với các nhà cung cấp bên thứ ba
                  được chọn, chẳng hạn như Google Analytics để cho phép các công
                  nghệ theo dõi và dịch vụ tiếp thị lại trên Ứng dụng thông qua
                  việc sử dụng cookie của bên thứ nhất và cookie của bên thứ ba,
                  để phân tích và theo dõi việc sử dụng của người dùng của Ứng
                  dụng, xác định mức độ phổ biến của một số nội dung nhất định
                  và hiểu rõ hơn về hoạt động trực tuyến. Bằng cách truy cập Ứng
                  dụng, bạn đồng ý với việc các nhà cung cấp bên thứ ba này thu
                  thập và sử dụng thông tin của bạn. Bạn được khuyến khích xem
                  lại chính sách bảo mật của họ và liên hệ trực tiếp với họ để
                  có câu trả lời cho các câu hỏi của bạn. Chúng tôi không chuyển
                  thông tin cá nhân cho các nhà cung cấp bên thứ ba này.
                </Text>

                <Text as="h1" size="lg" mt={4}>TRANG WEB BÊN THỨ BA</Text>
                <Text>
                  Ứng dụng có thể chứa các liên kết đến các trang web của bên
                  thứ ba và các ứng dụng quan tâm, bao gồm cả quảng cáo và các
                  dịch vụ bên ngoài, không được liên kết với chúng tôi. Khi bạn
                  đã sử dụng các liên kết này để rời khỏi Ứng dụng, bất kỳ thông
                  tin nào bạn cung cấp cho các bên thứ ba này sẽ không được điều
                  chỉnh bởi Chính sách bảo mật này và chúng tôi không thể đảm
                  bảo tính an toàn và bảo mật cho thông tin của bạn. Trước khi
                  truy cập và cung cấp bất kỳ thông tin nào cho bất kỳ trang web
                  của bên thứ ba nào, bạn nên thông báo cho mình về các chính
                  sách và thông lệ bảo mật (nếu có) của bên thứ ba chịu trách
                  nhiệm về trang web đó và nên thực hiện các bước cần thiết để,
                  theo quyết định của bạn, bảo vệ bảo mật thông tin của bạn.
                </Text>

                <Text as="h1" size="lg" mt={4}>BẢO MẬT THÔNG TIN CỦA BẠN</Text>
                <Text>
                  Chúng tôi sử dụng các biện pháp hành chính, kỹ thuật và bảo
                  mật vật lý để giúp bảo vệ thông tin cá nhân của bạn. Mặc dù
                  chúng tôi đã thực hiện các bước hợp lý để bảo mật thông tin cá
                  nhân mà bạn cung cấp cho chúng tôi, nhưng xin lưu ý rằng bất
                  chấp nỗ lực của chúng tôi, không có biện pháp bảo mật nào là
                  hoàn hảo hoặc không thể xuyên thủng và không có phương pháp
                  truyền dữ liệu nào có thể được đảm bảo chống lại bất kỳ hành
                  vi đánh chặn hoặc hình thức lạm dụng nào khác. Bất kỳ thông
                  tin nào được tiết lộ trực tuyến đều dễ bị đánh chặn và sử dụng
                  sai bởi các bên trái phép. Do đó, chúng tôi không thể đảm bảo
                  an toàn hoàn toàn nếu bạn cung cấp thông tin cá nhân.
                </Text>

                <Text as="h1" size="lg" mt={4}>CHÍNH SÁCH DÀNH CHO TRẺ EM</Text>
                <Text>
                  Chúng tôi không cố ý thu thập thông tin từ hoặc tiếp thị cho
                  trẻ em dưới 13 tuổi. Nếu bạn biết bất kỳ dữ liệu nào chúng tôi
                  đã thu thập từ trẻ em dưới 13 tuổi, vui lòng liên hệ với chúng
                  tôi bằng cách sử dụng thông tin liên hệ được cung cấp bên
                  dưới.
                </Text>

                <Text as="h1" size="lg" mt={4}>ĐIỀU KHIỂN CÁC TÍNH NĂNG KHÔNG THEO
                  DÕI</Text>
                <Text>
                  Hầu hết các trình duyệt web và một số hệ điều hành di động bao
                  gồm tính năng Không theo dõi (“DNT”) hoặc cài đặt mà bạn có
                  thể kích hoạt để báo hiệu tùy chọn bảo mật của bạn không để dữ
                  liệu về các hoạt động duyệt web trực tuyến của bạn bị giám sát
                  và thu thập. Chưa có tiêu chuẩn công nghệ thống nhất để nhận
                  biết và triển khai tín hiệu DNT đã được hoàn thiện. Do đó,
                  chúng tôi hiện không phản hồi các tín hiệu trình duyệt DNT
                  hoặc bất kỳ cơ chế nào khác tự động thông báo lựa chọn của bạn
                  để không bị theo dõi trực tuyến. Nếu tiêu chuẩn theo dõi trực
                  tuyến được thông qua mà chúng tôi phải tuân theo trong tương
                  lai, chúng tôi sẽ thông báo cho bạn về thông lệ đó trong phiên
                  bản sửa đổi của Chính sách quyền riêng tư này.
                </Text>

                <Text as="h1" size="lg" mt={4}>CÁC LỰA CHỌN LIÊN QUAN ĐẾN THÔNG TIN CỦA
                  BẠN</Text>
                <Text>
                  thông tin tài khoản
                  Bạn có thể xem lại hoặc thay đổi thông tin trong tài khoản của
                  mình bất cứ lúc nào hoặc chấm dứt tài khoản của mình bằng
                  cách:

                  Đăng nhập vào cài đặt tài khoản và cập nhật tài khoản của bạn
                  Liên hệ với chúng tôi bằng cách sử dụng thông tin liên hệ được
                  cung cấp bên dưới
                  Theo yêu cầu chấm dứt tài khoản của bạn, chúng tôi sẽ hủy kích
                  hoạt hoặc xóa tài khoản và thông tin của bạn khỏi cơ sở dữ
                  liệu đang hoạt động của chúng tôi. Tuy nhiên, một số thông tin
                  có thể được giữ lại trong các tệp của chúng tôi để ngăn chặn
                  gian lận, khắc phục sự cố, hỗ trợ bất kỳ cuộc điều tra nào,
                  thực thi Điều khoản Sử dụng của chúng tôi và / hoặc tuân thủ
                  các yêu cầu pháp lý.


                  Email và thông tin liên lạc
                  Nếu bạn không còn muốn nhận thư từ, email hoặc các thông tin
                  liên lạc khác từ chúng tôi, bạn có thể chọn không nhận bằng
                  cách:

                  Ghi nhận các tùy chọn của bạn tại thời điểm bạn đăng ký tài
                  khoản của mình với Ứng dụng
                  Đăng nhập vào cài đặt tài khoản của bạn và cập nhật tùy chọn
                  của bạn.
                  Liên hệ với chúng tôi bằng cách sử dụng thông tin liên hệ được
                  cung cấp bên dưới
                  Nếu bạn không còn muốn nhận thư từ, email hoặc thông tin liên
                  lạc khác từ bên thứ ba, bạn có trách nhiệm liên hệ trực tiếp
                  với bên thứ ba.

                </Text>
              </chakra.div>
            </chakra.div>
          </chakra.div>
          <chakra.div
              mt={{base: 4, lg: 0}}
              px={{base: 0, lg: '15px'}}
              w={{base: '100%', lg: '325px'}}
              className="sidebar-wrapper"
          >
            <Sidebar/>
          </chakra.div>
        </chakra.div>
      </chakra.div>
    </chakra.div>
  </>;
}

PrivacyPolicyPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};