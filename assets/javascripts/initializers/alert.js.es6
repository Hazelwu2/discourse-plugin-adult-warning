import swal from '../plugin/sweetalert2'
import Cookies from '../plugin/jquery.cookie'
export default {
    name: 'adult-wearning',
    initialize() {
        if ( !Cookies.get('confirm18')) {
            showWarningBox()
        }
        function showWarningBox(){
            swal({
                title: '提示',
                text: '由於本站部分區域有成人內容，進入 Lezismore 濡沫前，請確認您已滿18歲成年。',
                imageUrl: 'https://i.imgur.com/wfd9tpy.png',
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: '由於本站部分區域有成人內容，進入 Lezismore 濡沫前，請確認您已滿18歲成年',
                confirmButtonColor: '#f05c9e',
                customClass: 'warningContent',
                confirmButtonText: '我了解且已成年',
                showCancelButton: true,
                cancelButtonText: '我未滿18歲',
                reverseButtons: true,
                allowOutsideClick: false,
                animation: false,
        }).then((result) => {
          if (result.dismiss === swal.DismissReason.cancel) {
            document.location = "https://lezismore.org/underage/"
            } else if (result.value) {
                Cookies.set('confirm18', 'yes',{ expires: 1, path: '/' });;
            }
        })
        }
        // Swal.click是，過期一天
    }
};