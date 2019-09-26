import swal from '../plugin/sweetalert2'
import Cookies from '../plugin/jquery.cookie'
export default {
    name: 'adult-wearning',
    initialize() {
        if ( !Cookies.get('confirm18')) {
            showWarningBox()
        }
        function showWarningBox() {
            swal.fire({
                html: '<img class="ha-img" src="https://lezismore.org/wp-content/uploads/2019/05/0505%E7%B6%B2%E7%AB%99%E7%B4%A0%E6%9D%90%E5%AE%9A%E7%A8%BF-13-300x300.png" /><div>由於本站部分區域有成人內容，<br>進入濡沫 Lez is more 之前，<br>您必須為年滿十八歲之成年人，<br>或您已年滿您所在國家／地區法律所規定之成年最低年齡。</div>',
                // html: '<img class="ha-img" src="https://community.lezismore.org/uploads/default/optimized/1X/0505-website-13.png" /><div>由於本站部分區域有成人內容，<br>進入濡沫 Lez is more 之前，<br>您必須為年滿十八歲之成年人，<br>或您已年滿您所在國家／地區法律所規定之成年最低年齡。</div>',
                showCloseButton: false,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '我了解且已成年',
                confirmButtonAriaLabel: '我了解且已成年',
                confirmButtonColor: 'rgba(166,66,66,1)',
                cancelButtonText:
                    '我未成年',
                cancelButtonAriaLabel: '我未成年',
                cancelButtonColor: 'rgba(128,128,128,1)',
                reverseButtons: true,
                allowOutsideClick: false,
                customClass: {
                    container: 'ha-container',
                    popup: 'ha-popup',
                    header: 'ha-header',
                    title: 'ha-title',
                    closeButton: 'ha-closeBtn',
                    content: 'ha-content',
                    actions: 'ha-actions',
                }
            }).then((result) => {
                if (result.dismiss === swal.DismissReason.cancel) {
                    let redirectSite = "https://lezismore.org/underage/"
                    document.location = redirectSite
                } else if (result.value) {
                    Cookies.set('confirm18', 'yes',{ expires: 1, path: '/' });;
                }
            })
        };
    }
};