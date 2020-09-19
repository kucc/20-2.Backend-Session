const JibackRyong = [
  {
    name: "현채",
    president: ["지성", "지현", "수홍", "무원", "민주"],
    vice_president: ["지수", "정호", "해나", "은영", "희수", "지민"]
  },
  {
    name: "지수",
    president: [
      "현채",
      "지수",
      "지성",
      "원석",
      "수홍",
      "해나",
      "무원",
      "은영",
      "지민"
    ],
    vice_president: ["정호", "민주"]
  },
  {
    name: "지성",
    president: ["현채", "지수", "원석", "수홍", "해나"],
    vice_president: ["지성", "무원", "민주", "지민"]
  },
  {
    name: "지현",
    president: ["지수", "지성", "수홍", "해나", "은영", "희수", "지민"],
    vice_president: ["원석", "정호", "무원"]
  },
  {
    name: "원석",
    president: ["현채", "지수", "지성", "지현", "정호", "수홍", "은영", "지민"],
    vice_president: ["해나", "희수"]
  },
  {
    name: "정호",
    president: ["현채", "지수", "정호", "수홍", "희수", "지민"],
    vice_president: ["지성", "지현", "원석", "민주"]
  },
  {
    name: "수홍",
    president: ["현채", "지수", "원석", "수홍", "무원", "은영", "지민"],
    vice_president: ["지현", "정호"]
  },
  {
    name: "해나",
    president: ["원석", "수홍", "은영", "희수", "지민"],
    vice_president: ["현채", "지수", "지성", "해나", "민주"]
  },
  {
    name: "무원",
    president: [
      "현채",
      "지수",
      "지성",
      "지현",
      "원석",
      "정호",
      "수홍",
      "은영",
      "민주",
      "지민"
    ],
    vice_president: ["해나", "무원"]
  },
  { name: "은영", vice_president: ["현채", "정호"] },
  {
    name: "희수",
    president: ["정호", "수홍", "무원", "민주"],
    vice_president: ["현채", "지현"]
  },
  {
    name: "민주",
    president: ["지수", "원석", "무원", "은영", "희수", "지민"],
    vice_president: ["정호", "수홍", "해나", "민주"]
  },
  {
    name: "지민",
    president: ["지수", "지현", "원석", "정호", "해나", "민주"],
    vice_president: ["지성", "희수", "지민"]
  }
];

module.exports = JibackRyong;
