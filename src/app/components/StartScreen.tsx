import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RadioButton } from './components/RadioButton';
import { Checkbox } from './components/Checkbox';
import { TextField } from './components/TextField';
import { Button } from './components/Button';
import { StartScreen } from './components/StartScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { SuccessScreen } from './components/SuccessScreen';
import imgHeader from "figma:asset/2d81624423c51d0e2ba437ff5e9cbc7e0cefe807.png";

interface FormData {
  // 質問1: サンクスカードの利用頻度
  sendFrequency: string;
  receiveFrequency: string;
  
  // 質問2: サンクスカードを送るきっかけ
  sendTriggers: {
    helpedWithWork: boolean;
    finishedOnTime: boolean;
    coveredMistake: boolean;
    endOfPeriod: boolean;
    projectMilestone: boolean;
    eventTime: boolean;
    dailyNotice: boolean;
  };
  
  // 質問3: サンクスカードの満足度
  satisfaction: string;
  
  // 質問4: サンクスカードの価値
  values: {
    betterAtmosphere: boolean;
    easierGratitude: boolean;
    feltEvaluated: boolean;
    motivation: boolean;
    interDeptComm: boolean;
    superiorSubComm: boolean;
    noValue: boolean;
  };
  
  // 質問5: 改善してほしい点
  improvement: string;
  
  // 同意
  consent: boolean;
}

function Space() {
  return <div className="h-[16px] shrink-0 w-full" data-name="space" />;
}

function Container1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none rounded-[8px]" 
        style={{ 
          background: 'var(--gray-gradient)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px'
        }}
      />
      <div className="content-stretch flex flex-col items-start px-[8px] py-[16px] relative w-full">
        <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[1.2] max-w-[390px] relative shrink-0 text-[#555] text-[16px] w-[354px]">
          <p className="mb-0">アンケートへのご協力ありがとうございます。</p>
          <p>所要時間：5分程度</p>
        </div>
      </div>
    </div>
  );
}

function WhiteArea() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="white-area">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold items-start justify-end leading-[0] px-[16px] py-[8px] relative size-full text-[#202020] text-[24px] tracking-[0.48px]">
          <div className="flex flex-col justify-center relative shrink-0 w-full">
            <p className="leading-[1.5]">サンクスカード</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-right w-full">
            <p className="leading-[1.5]">満足度アンケート</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col h-[200px] items-center left-0 overflow-clip pb-[16px] pt-[80px] px-[16px] top-0 max-w-[390px] w-full" data-name="header">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeader} />
      <WhiteArea />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative h-[40px] max-w-[390px] w-full" data-name="footer">
      <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgHeader} />
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'start' | 'survey' | 'loading' | 'success'>('start');
  const [formData, setFormData] = useState<FormData>({
    sendFrequency: '',
    receiveFrequency: '',
    sendTriggers: {
      helpedWithWork: false,
      finishedOnTime: false,
      coveredMistake: false,
      endOfPeriod: false,
      projectMilestone: false,
      eventTime: false,
      dailyNotice: false,
    },
    satisfaction: '',
    values: {
      betterAtmosphere: false,
      easierGratitude: false,
      feltEvaluated: false,
      motivation: false,
      interDeptComm: false,
      superiorSubComm: false,
      noValue: false,
    },
    improvement: '',
    consent: false,
  });

  const handleSubmit = () => {
    console.log('フォーム送信データ:', formData);
    
    // バリデーション
    if (!formData.sendFrequency) {
      alert('質問1: カードを送る頻度を選択してください');
      return;
    }
    if (!formData.receiveFrequency) {
      alert('質問1: カードを受け取る頻度を選択してください');
      return;
    }
    if (!formData.satisfaction) {
      alert('質問3: 満足度を選択してください');
      return;
    }
    if (!formData.consent) {
      alert('同意事項にチェックを入れてください');
      return;
    }
    
    // 読み込み画面に遷移
    setCurrentScreen('loading');
    
    // 2秒後に送信完了画面に遷移
    setTimeout(() => {
      // フォームをリセット
      setFormData({
        sendFrequency: '',
        receiveFrequency: '',
        sendTriggers: {
          helpedWithWork: false,
          finishedOnTime: false,
          coveredMistake: false,
          endOfPeriod: false,
          projectMilestone: false,
          eventTime: false,
          dailyNotice: false,
        },
        satisfaction: '',
        values: {
          betterAtmosphere: false,
          easierGratitude: false,
          feltEvaluated: false,
          motivation: false,
          interDeptComm: false,
          superiorSubComm: false,
          noValue: false,
        },
        improvement: '',
        consent: false,
      });
      setCurrentScreen('success');
    }, 2000);
  };

  const handleCancel = () => {
    if (confirm('入力内容をキャンセルしてスタート画面に戻りますか？')) {
      setFormData({
        sendFrequency: '',
        receiveFrequency: '',
        sendTriggers: {
          helpedWithWork: false,
          finishedOnTime: false,
          coveredMistake: false,
          endOfPeriod: false,
          projectMilestone: false,
          eventTime: false,
          dailyNotice: false,
        },
        satisfaction: '',
        values: {
          betterAtmosphere: false,
          easierGratitude: false,
          feltEvaluated: false,
          motivation: false,
          interDeptComm: false,
          superiorSubComm: false,
          noValue: false,
        },
        improvement: '',
        consent: false,
      });
      setCurrentScreen('start');
    }
  };

  const handleStart = () => {
    setCurrentScreen('survey');
  };

  const handleBackToStart = () => {
    setCurrentScreen('start');
  };

  // スタート画面を表示
  if (currentScreen === 'start') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="start"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <StartScreen onStart={handleStart} />
        </motion.div>
      </AnimatePresence>
    );
  }

  // 読み込み画面を表示
  if (currentScreen === 'loading') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="loading"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <LoadingScreen />
        </motion.div>
      </AnimatePresence>
    );
  }

  // アンケート画面を表示
  if (currentScreen === 'survey') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="survey"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            className="content-stretch flex flex-col gap-[10px] items-center pt-[200px] px-[10px] relative min-h-screen max-w-[390px] w-full mx-auto"
            data-name="demo"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 390 2223\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(7.671 111.15 -19.5 351.01 198.58 1111.5)\\'><foreignObject x=\\'-352.07\\' y=\\'-352.07\\' width=\\'704.13\\' height=\\'704.13\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgba(245, 247, 250, 0.8) 0%, rgba(245, 247, 250, 0.8) 4%, rgba(233, 234, 235, 0.8) 50%, rgba(233, 234, 235, 0.8) 54%, rgba(245, 247, 250, 0.8) 100%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>'), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
            }}
          >
            <Space />
            
            {/* メインコンテンツ */}
            <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[390px] relative rounded-[8px] shrink-0 w-full" data-name="container">
              
              {/* イントロダクション */}
              <Container1 />

              {/* 質問1: サンクスカードの利用頻度 */}
              <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 pointer-events-none rounded-[8px]" 
                  style={{ 
                    background: 'var(--gray-gradient)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px'
                  }}
                />
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative w-full">
                  <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
                    <p className="leading-none">1. サンクスカードの利用頻度</p>
                  </div>
                  
                  <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] relative shrink-0 text-[#555] text-[16px] w-[354px]">
                    <p className="leading-[1.2]">最近の1か月を振り返って、あなたはサンクスカードをどのくらいの頻度で送っていますか？</p>
                  </div>
                  
                  <div className="relative shrink-0 w-full" data-name="option">
                    <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative w-full">
                      <RadioButton
                        id="send-rarely"
                        name="sendFrequency"
                        value="send-rarely"
                        label="ほとんど送っていない"
                        checked={formData.sendFrequency === 'send-rarely'}
                        onChange={(value) => setFormData({ ...formData, sendFrequency: value })}
                      />
                      <RadioButton
                        id="send-monthly"
                        name="sendFrequency"
                        value="send-monthly"
                        label="月に1回程度"
                        checked={formData.sendFrequency === 'send-monthly'}
                        onChange={(value) => setFormData({ ...formData, sendFrequency: value })}
                      />
                      <RadioButton
                        id="send-2-3-monthly"
                        name="sendFrequency"
                        value="send-2-3-monthly"
                        label="月に2〜3回程度"
                        checked={formData.sendFrequency === 'send-2-3-monthly'}
                        onChange={(value) => setFormData({ ...formData, sendFrequency: value })}
                      />
                      <RadioButton
                        id="send-weekly"
                        name="sendFrequency"
                        value="send-weekly"
                        label="週に1回以上"
                        checked={formData.sendFrequency === 'send-weekly'}
                        onChange={(value) => setFormData({ ...formData, sendFrequency: value })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
                    <p className="leading-[1.2]">最近の1か月を振り返って、あなたはサンクスカードをどのくらいの頻度で受け取っていますか？</p>
                  </div>
                  
                  <div className="relative shrink-0 w-full" data-name="option">
                    <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative w-full">
                      <RadioButton
                        id="receive-rarely"
                        name="receiveFrequency"
                        value="receive-rarely"
                        label="ほとんど受け取っていない"
                        checked={formData.receiveFrequency === 'receive-rarely'}
                        onChange={(value) => setFormData({ ...formData, receiveFrequency: value })}
                      />
                      <RadioButton
                        id="receive-monthly"
                        name="receiveFrequency"
                        value="receive-monthly"
                        label="月に1回程度"
                        checked={formData.receiveFrequency === 'receive-monthly'}
                        onChange={(value) => setFormData({ ...formData, receiveFrequency: value })}
                      />
                      <RadioButton
                        id="receive-2-3-monthly"
                        name="receiveFrequency"
                        value="receive-2-3-monthly"
                        label="月に2~3回程度"
                        checked={formData.receiveFrequency === 'receive-2-3-monthly'}
                        onChange={(value) => setFormData({ ...formData, receiveFrequency: value })}
                      />
                      <RadioButton
                        id="receive-weekly"
                        name="receiveFrequency"
                        value="receive-weekly"
                        label="週に1回以上"
                        checked={formData.receiveFrequency === 'receive-weekly'}
                        onChange={(value) => setFormData({ ...formData, receiveFrequency: value })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 質問2: サンクスカードを送るきっかけ */}
              <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 pointer-events-none rounded-[8px]" 
                  style={{ 
                    background: 'var(--gray-gradient)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px'
                  }}
                />
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative w-full">
                  <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] w-full">
                    <p className="leading-none">2. サンクスカードを送るきっかけ</p>
                  </div>
                  <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] relative shrink-0 text-[#555] text-[16px] w-full">
                    <p className="leading-[1.2]">あなたがサンクスカードを送ろうと思うのは、どのような場面が多いですか？（複数選択可）</p>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="option">
                    <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative w-full">
                      <Checkbox
                        id="helped-work"
                        label="仕事を助けてもらったとき"
                        checked={formData.sendTriggers.helpedWithWork}
                        onChange={(checked) => setFormData({ ...formData, sendTriggers: { ...formData.sendTriggers, helpedWithWork: checked } })}
                      />
                      <Checkbox
                        id="finished-on-time"
                        label="期日までに仕事を終わらせてくれたとき"
                        checked={formData.sendTriggers.finishedOnTime}
                        onChange={(checked) => setFormData({ ...formData, sendTriggers: { ...formData.sendTriggers, finishedOnTime: checked } })}
                      />
                      <Checkbox
                        id="covered-mistake"
                        label="自分のミスをフォローしてもらったとき"
                        checked={formData.sendTriggers.coveredMistake}
                        onChange={(checked) => setFormData({ ...formData, sendTriggers: { ...formData.sendTriggers, coveredMistake: checked } })}
                      />
                      <Checkbox
                        id="end-of-period"
                        label="1日や1週間の終わり"
                        checked={formData.sendTriggers.endOfPeriod}
                        onChange={(checked) => setFormData({ ...formData, sendTriggers: { ...formData.sendTriggers, endOfPeriod: checked } })}
                      />
                      <Checkbox
                        id="project-milestone"
                        label="プロジェクトの節目"
                        checked={formData.sendTriggers.projectMilestone}
                        onChange={(checked) => setFormData({ ...formData, sendTriggers: { ...formData.sendTriggers, projectMilestone: checked } })}
                      />
                      <Checkbox
                        id="event-time"
                        label="研究討論会などのイベント時"
                        checked={formData.sendTriggers.eventTime}
                        onChange={(checked) => setFormData({ ...formData, sendTriggers: { ...formData.sendTriggers, eventTime: checked } })}
                      />
                      <Checkbox
                        id="daily-notice"
                        label="特に決まったきっかけはなく、日常的に気づいたとき"
                        checked={formData.sendTriggers.dailyNotice}
                        onChange={(checked) => setFormData({ ...formData, sendTriggers: { ...formData.sendTriggers, dailyNotice: checked } })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 質問3: サンクスカードの満足度 */}
              <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 pointer-events-none rounded-[8px]" 
                  style={{ 
                    background: 'var(--gray-gradient)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px'
                  }}
                />
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative w-full">
                  <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] w-full">
                    <p className="leading-none">3. サンクスカードの満足度</p>
                  </div>
                  <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] relative shrink-0 text-[#555] text-[16px] w-full">
                    <p className="leading-[1.2]">現在のサンクスカードの運用について、総合的な満足度を教えてください。</p>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="option">
                    <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative w-full">
                      <RadioButton
                        id="very-satisfied"
                        name="satisfaction"
                        value="very-satisfied"
                        label="とても満足している"
                        checked={formData.satisfaction === 'very-satisfied'}
                        onChange={(value) => setFormData({ ...formData, satisfaction: value })}
                      />
                      <RadioButton
                        id="satisfied"
                        name="satisfaction"
                        value="satisfied"
                        label="満足している"
                        checked={formData.satisfaction === 'satisfied'}
                        onChange={(value) => setFormData({ ...formData, satisfaction: value })}
                      />
                      <RadioButton
                        id="neutral"
                        name="satisfaction"
                        value="neutral"
                        label="どちらでもない"
                        checked={formData.satisfaction === 'neutral'}
                        onChange={(value) => setFormData({ ...formData, satisfaction: value })}
                      />
                      <RadioButton
                        id="not-satisfied"
                        name="satisfaction"
                        value="not-satisfied"
                        label="あまり満足していない"
                        checked={formData.satisfaction === 'not-satisfied'}
                        onChange={(value) => setFormData({ ...formData, satisfaction: value })}
                      />
                      <RadioButton
                        id="not-satisfied-at-all"
                        name="satisfaction"
                        value="not-satisfied-at-all"
                        label="まったく満足していない"
                        checked={formData.satisfaction === 'not-satisfied-at-all'}
                        onChange={(value) => setFormData({ ...formData, satisfaction: value })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 質問4: サンクスカードの価値 */}
              <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 pointer-events-none rounded-[8px]" 
                  style={{ 
                    background: 'var(--gray-gradient)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px'
                  }}
                />
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative w-full">
                  <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">
                    <p className="leading-none">4. サンクスカードの価値</p>
                  </div>
                  <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
                    <p className="leading-[1.2]">サンクスカードを通じてどのような点に価値や効果を感じていますか？（複数選択可）</p>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="option">
                    <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative w-full">
                      <Checkbox
                        id="better-atmosphere"
                        label="職場の雰囲気がよくなる"
                        checked={formData.values.betterAtmosphere}
                        onChange={(checked) => setFormData({ ...formData, values: { ...formData.values, betterAtmosphere: checked } })}
                      />
                      <Checkbox
                        id="easier-gratitude"
                        label="感謝を伝えやすくなる"
                        checked={formData.values.easierGratitude}
                        onChange={(checked) => setFormData({ ...formData, values: { ...formData.values, easierGratitude: checked } })}
                      />
                      <Checkbox
                        id="felt-evaluated"
                        label="日ごろの行動がきちんと評価されていると感じる"
                        checked={formData.values.feltEvaluated}
                        onChange={(checked) => setFormData({ ...formData, values: { ...formData.values, feltEvaluated: checked } })}
                      />
                      <Checkbox
                        id="motivation"
                        label="モチベーションが上がる"
                        checked={formData.values.motivation}
                        onChange={(checked) => setFormData({ ...formData, values: { ...formData.values, motivation: checked } })}
                      />
                      <Checkbox
                        id="inter-dept-comm"
                        label="他部所・他チームとのコミュニケーションが増える"
                        checked={formData.values.interDeptComm}
                        onChange={(checked) => setFormData({ ...formData, values: { ...formData.values, interDeptComm: checked } })}
                      />
                      <Checkbox
                        id="superior-sub-comm"
                        label="上司・部下とのコミュニケーションが増える"
                        checked={formData.values.superiorSubComm}
                        onChange={(checked) => setFormData({ ...formData, values: { ...formData.values, superiorSubComm: checked } })}
                      />
                      <Checkbox
                        id="no-value"
                        label="特に価値や効果は感じない"
                        checked={formData.values.noValue}
                        onChange={(checked) => setFormData({ ...formData, values: { ...formData.values, noValue: checked } })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 質問5: 改善してほしい点 */}
              <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="container">
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 pointer-events-none rounded-[8px]" 
                  style={{ 
                    background: 'var(--gray-gradient)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px'
                  }}
                />
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative w-full">
                  <div className="flex flex-col font-['Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#202020] text-[16px] w-full">
                    <p className="leading-none">5. 改善してほしい点・あったらよい工夫</p>
                  </div>
                  <div className="flex flex-col font-['Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[390px] relative shrink-0 text-[#555] text-[16px] w-full">
                    <p className="leading-[1.2]">サンクスカードの仕組みや運用について、改善してほしい点や「あったらいい」と感じる機能・ルール・工夫があれば具体的に教えてください。</p>
                  </div>
                  <TextField
                    id="improvement"
                    label="自由記述欄"
                    placeholder="記述例：スマホからも送れるとよい"
                    value={formData.improvement}
                    onChange={(value) => setFormData({ ...formData, improvement: value })}
                  />
                </div>
              </div>

              <Space />

              {/* 同意チェックボックス */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CheckboxField-S">
                <Checkbox
                  id="consent"
                  label="本アンケートの回答内容が、個人が特定されない形で集計・分析されることに同意します。"
                  checked={formData.consent}
                  onChange={(checked) => setFormData({ ...formData, consent: checked })}
                />
              </div>

              {/* ボタン */}
              <div className="content-stretch flex gap-[16px] items-start px-[40px] relative shrink-0" data-name="button">
                <Button variant="secondary" onClick={handleCancel}>
                  キャンセル
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  送信
                </Button>
              </div>
            </div>

            {/* Footer領域（80pxの空白の下部にfooterを配置） */}
            <div className="relative h-[80px] max-w-[390px] w-full">
              <div className="absolute bottom-0 left-0 right-0">
                <Footer />
              </div>
            </div>

            <Header />
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // 成功画面を表示
  if (currentScreen === 'success') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <SuccessScreen onBackToStart={handleBackToStart} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return null;
}