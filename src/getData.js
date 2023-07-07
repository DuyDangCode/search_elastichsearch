const example = [
  { id: 1, title: "Kiki's Delivery Service" },
  { id: 2, title: "Quiet City" },
  { id: 3, title: "Teen Wolf Too" },
  { id: 4, title: "Our Idiot Brother" },
  { id: 5, title: "Battle of Britain" },
  { id: 6, title: "Centennial" },
  { id: 7, title: "Crime on the Highway" },
  { id: 8, title: "The Periwig-Maker" },
  { id: 9, title: "Blame it on Fidel! (La faute à Fidel!)" },
  { id: 10, title: "Pete Smalls Is Dead" },
];

//dữ liệu trả về là một array với id và title là bắt buộc

function suggestData() {
  // dữ liệu khi gõ
  return example;
}

function getData() {
  // dữ liệu khi nhấn nút tìm kiếm
  return example;
}

exports.suggestData = suggestData();
exports.getData = getData();
