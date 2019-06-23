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
                text: '由於本站部分區域有成人內容，進入 Lezismore 濡沫前，您必須為年滿十八歲之成年人，或您已年滿您所在國家／地區法律所規定之成年最低年齡。',
                imageUrl: 'https://i.imgur.com/wfd9tpy.png',
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: '由於本站部分區域有成人內容，進入 Lezismore 濡沫前，您必須為年滿十八歲之成年人，或您已年滿您所在國家／地區法律所規定之成年最低年齡',
                confirmButtonColor: 'rgba(166,66,66,1)',
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
    }
};