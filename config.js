// PROTOTYPE - NOT FOR PRODUCTION
// Question: (not set)
// Date: 2026-11-16
// 큐브게임의 튜닝 값. 게임은 tune.<이름>으로 매번 읽으므로, 슬라이더로 바꾸면 곧바로 적용된다.
// 방해·이동·잠금 큐브가 처음 나오는 때는 스테이지 번호가 아니라 상징물의 레벨(1~10)이다.
window.CONFIG = {
  // 제한 시간(초) = round((time_base + 남은 큐브 단위 × time_per_cube) × time_scale)
  time_base: { value: 60, min: 10, max: 180, step: 5 },
  time_per_cube: { value: 3, min: 0.5, max: 8, step: 0.5 },
  time_scale: { value: 0.7, min: 0.3, max: 1.5, step: 0.05 },

  // 콤보: 이전 탭과의 간격(초)
  combo_window: { value: 0.5, min: 0.2, max: 1.5, step: 0.05 },
  lightning_window: { value: 0.2, min: 0.05, max: 0.5, step: 0.05 },
  combo_cap: { value: 10, min: 1, max: 30, step: 1 },        // 콤보 보너스가 더 늘지 않는 연속 횟수
  lightning_mult: { value: 3, min: 1, max: 6, step: 1 },     // 번개 콤보 보너스 배수
  combo_auto_pop: { value: 1, min: 0, max: 3, step: 0.5 },   // 콤보 숫자 × 이 값만큼 주변 남는 큐브가 자동으로 터짐
  combo_auto_max: { value: 10, min: 0, max: 30, step: 1 },   // 한 번에 자동으로 터지는 최대 개수

  // 방해 큐브
  blocker_from: { value: 4, min: 1, max: 10, step: 1 },      // 처음 나오는 레벨
  blocker_max: { value: 6, min: 0, max: 12, step: 1 },

  // 움직이는 큐브
  move_from: { value: 6, min: 1, max: 10, step: 1 },         // 처음 나오는 레벨
  move_interval: { value: 2.6, min: 0.5, max: 6, step: 0.1 }, // 첫 레벨의 이동 간격(초), 레벨마다 0.2초씩 짧아짐
  move_interval_min: { value: 0.9, min: 0.2, max: 3, step: 0.1 },

  // 잠긴 큐브
  lock_from: { value: 8, min: 1, max: 10, step: 1 },         // 처음 나오는 레벨
  lock_time: { value: 5, min: 1, max: 12, step: 0.5 },       // 잠겨 있는 시간(초)
  lock_interval: { value: 3.2, min: 1, max: 10, step: 0.1 }, // 새 잠금이 생기는 간격(초)

  // 새 방식 스테이지
  memory_show: { value: 5, min: 2, max: 12, step: 0.5 },      // 기억: 처음 정답을 보여 주는 시간(초)
  memory_peek: { value: 2, min: 0.5, max: 5, step: 0.5 },     // 기억: 하트 1개로 다시 보는 시간(초)
  time_mult_memory: { value: 0.875, min: 0.3, max: 2, step: 0.025 }, // 기억 스테이지 제한 시간 배수 (1.25에서 30% 줄임)
  time_mult_regrow: { value: 0.7, min: 0.3, max: 2, step: 0.05 },  // 재생 스테이지 제한 시간 배수 (30% 줄임)
  regrow_interval: { value: 5, min: 1, max: 10, step: 0.5 },  // 재생: 다시 자라는 간격(초). 4초에서 20% 느리게
  bomb_count: { value: 3, min: 1, max: 8, step: 1 },          // 폭탄: 기본 폭탄 수(레벨 4마다 1개씩 늘어남)

  // 화면·소리
  answer_split: { value: 0.34, min: 0.2, max: 0.5, step: 0.01 }, // 위 정답 영역이 차지하는 비율
  music_volume: { value: 0.05, min: 0, max: 0.2, step: 0.01 },
  music_tempo: { value: 128, min: 90, max: 170, step: 2 },       // 배경음악 빠르기(BPM)
  unlock_all: { value: 0, min: 0, max: 1, step: 1 },             // 1이면 잠금 없이 모든 상징물을 열어 둔다(시험용)
};
