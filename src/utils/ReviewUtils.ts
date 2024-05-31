import dayjs from "dayjs";

// 일반적인 계정 목록
const names = ["dofla", "bobo", "wjddod", "doyyyy", "yaaan"];
const words = ["ll", "aa", "ri", "haha", "_"];

// 리뷰 목록
const reviewsA = [
  "강한 자극 없이 꽃향기, 달콤함, 나무 탄내 순으로 느껴지고 부드럽게 사라지는 맛이에요.",
  "세병째 구매합니다. 먹어본 와인 중에 제일 부드럽고 맛있네요.",
  "첫 모금부터 깊고 복합적인 맛이 입안을 감싸고, 긴 여운이 남습니다. 특별한 날에 마시기 좋습니다!",
  "훌륭한 산미와 구조감이 매력적입니다.",
  "깊고 진한 과일 향과 함께 부드러운 탄닌이 아주 맛있습니다. 특별한 날에 사랑하는 사람과 함께 마시고 싶은 맛이에요 :)",
];

const reviewsB = [
  "우아한 와인이에요. 피니시가 길고 부드럽네요.",
  "재재구매입니다. 특별한 날에 마시기 좋은 와인이에요!",
  "친구들이 전부 맛있다고 좋아했어요! 또 구매하겠습니다ㅎㅎㅎㅎㅎ",
];

export const ReviewUtils = {
  getRandomUserId: (): string => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const randomNumber = Math.floor(Math.random() * 100); // 0에서 99 사이의 숫자
    return `${randomName}${randomWord}${randomNumber}`;
  },
  getRandomDateInPast2Months: (): string => {
    const currentDate = new Date();
    const pastDate = new Date();
    pastDate.setDate(currentDate.getDate() - 60);

    const randomTime =
      pastDate.getTime() +
      Math.random() * (currentDate.getTime() - pastDate.getTime());
    return dayjs(randomTime).format("YYYY.MM.DD");
  },
  getReviewContents: (type: string): string => {
    let reviewType;
    if (type === "A") {
      reviewType = reviewsA;
    } else {
      reviewType = reviewsB;
    }

    return reviewType[Math.floor(Math.random() * reviewType.length)];
  },
};
