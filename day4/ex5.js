var text, want, no1, no2;


function text() {
    text = prompt('문장를 입력해주십시오. 결과는 표에 나타납니다.');
    want = prompt('입력한 문장 내에서 찾고싶은 단어를 적어주세요.')
}
function startNo() {
    no1 = prompt('문자열 추출 시작 지점을 입력해주십시오.')
}
function endNo() {
    no2 = prompt('문자열 추출 마지막 지점을 입력해주십시오.')
}
function strMethod() {
    document.getElementById('len').innerHTML = text.length;
    document.getElementById('last').innerHTML = text.lastIndexOf(want);
    document.getElementById('subs1').innerHTML = text.substring(no1, no2);
    document.getElementById('subs2').innerHTML = text.slice(no1, no2);
}