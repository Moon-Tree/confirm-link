/**
 * 전체선택 체크박스 모듈 생성
 * 만든 날짜 : 20230310
 */

//- 전체선택 체크박스는 .check-all 이라고 부른다
//- 개별항목 체크박스는 .check-unit 이라고 부른다
window.addEventListener("load", function(){

    //전체선택 처리
    var checkAllList = document.querySelectorAll(".check-all");
    for(var i=0; i < checkAllList.length; i++) {
        checkAllList[i].addEventListener("change", function(){
            //this == 전체선택 체크박스

            //개별항목 체크
            var checkboxes = document.querySelectorAll(".check-unit");
            for(var i=0; i < checkboxes.length; i++) {
                checkboxes[i].checked = this.checked;
            }

            //전체항목 체크
            for(var i=0; i < checkAllList.length; i++) {
                checkAllList[i].checked = this.checked;
            }
        });
    }

    //개별항목에 따른 전체 선택 체크 처리
    var checkItemList = document.querySelectorAll(".check-unit");
    for(var i=0; i < checkItemList.length; i++) {
        checkItemList[i].addEventListener("change", function(){
            //전체 체크박스와 체크된 체크박스 개수를 구하여
            var count1 = document.querySelectorAll(".check-unit").length;
            var count2 = document.querySelectorAll(".check-unit:checked").length;
            var isAllCheck = count1 == count2;

            //판정 결과에 따라 전체 선택 체크박스를 체크 처리
            var checkAllList = document.querySelectorAll(".check-all");
            for(var i=0; i < checkAllList.length; i++) {
                checkAllList[i].checked = isAllCheck;
            }
        });
    }
});
