import React from 'react';

const ChristmasMenu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-gray-800">

      {/* Menu Pages Container - Full Width maintaining original design */}
      <div className="flex flex-col">
        
        {/* Page 1: Cover - Full Width */}
        <div className="page-fullwidth cover-page">
          <div className="cover-bg"></div>
          
          {/* Snowfall Animation */}
          <div className="snowflakes">
            <div className="snowflake">❄</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❄</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❄</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❄</div>
          </div>

          <div className="cover-content">
            <div className="cover-frame"></div>
            
            <div className="magazine-header">
              <div className="vol-text">Adieu 2025 · Special Issue</div>
              <div className="header-line"></div>
              <div className="private-text">PRIVATE INVITATION</div>
            </div>

            <div className="cover-main">
              <h1 className="main-title">
                HOLIDAY
                <span>Dinner</span>
              </h1>
              <p className="subtitle">당신만을 위한 특별한 저녁 초대</p>
            </div>

            <div className="cover-footer">
              <div className="date-display">December 13</div>
              <div className="date-korean">2025년 12월 13일 토요일, 오후 7시</div>
              <div className="location-text">✦ 따뜻한 온기가 있는 우리 집에서 ✦</div>
            </div>
          </div>
        </div>

        {/* Page 2: Garlic Butter Steak - Full Width */}
        <div className="page-fullwidth menu-page">
          <div className="menu-banner">
            <img src="/스테이크.png" alt="Garlic Butter Steak" />
            <div className="page-number">02</div>
            <div className="dish-number">01</div>
          </div>
          
          <div className="menu-content">
            <div className="category-label">Main Course</div>
            <h2 className="dish-name">Garlic Butter Steak</h2>
            
            <div className="dish-meaning">
              <div className="meaning-icon">✦</div>
              <div className="meaning-text">
                "풍요 (Abundance)"<br />
                묵직한 레드와인과 함께 한 해의 노고를 위로하는 깊은 맛
              </div>
            </div>
            
            <div className="dish-description">
              최상급 안심 스테이크를 미디엄 레어로 완벽하게 구워냈습니다. 
              진한 마늘 버터의 풍미와 로즈마리의 향이 입안 가득 맴돌며, 
              한 해를 마무리하는 든든한 위로가 되어줄 것입니다. 
              당신의 수고로움에 보답하는 따뜻한 한 접시입니다.
            </div>
            
            <div className="decorative-line">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Page 3: Caprese Tower - Full Width */}
        <div className="page-fullwidth menu-page">
          <div className="menu-banner">
            <img src="/샐러드.png" alt="Caprese Tower" />
            <div className="page-number">03</div>
            <div className="dish-number">02</div>
          </div>
          
          <div className="menu-content">
            <div className="category-label">Appetizer</div>
            <h2 className="dish-name">Caprese Tower</h2>
            
            <div className="dish-meaning">
              <div className="meaning-icon">♡</div>
              <div className="meaning-text">
                "조화 (Harmony)"<br />
                서로 다른 재료가 만나 완벽한 어울림을 만들어내듯
              </div>
            </div>
            
            <div className="dish-description">
              붉은 토마토와 하얀 모차렐라, 그리고 초록빛 바질. 
              서로 다른 색과 맛이 층층이 쌓여 만들어내는 완벽한 밸런스. 
              마치 우리 둘이 함께 쌓아온 시간처럼, 
              각자의 색깔이 어우러져 더 아름다운 하모니를 이룹니다.
            </div>
            
            <div className="decorative-line">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Page 4: Honey Glazed Salmon - Full Width */}
        <div className="page-fullwidth menu-page">
          <div className="menu-banner">
            <img src="/연어.png" alt="Honey Glazed Salmon" />
            <div className="page-number">04</div>
            <div className="dish-number">03</div>
          </div>
          
          <div className="menu-content">
            <div className="category-label">Seafood</div>
            <h2 className="dish-name">Honey Glazed Salmon</h2>
            
            <div className="dish-meaning">
              <div className="meaning-icon">★</div>
              <div className="meaning-text">
                "황금기 (Golden Era)"<br />
                당신의 가장 빛나는 순간을 위하여
              </div>
            </div>
            
            <div className="dish-description">
              황금빛으로 구워낸 연어 스테이크에 달콤한 허니 글레이즈를 입혔습니다.
              부드럽게 부서지는 식감과 달콤 짭짤한 맛의 조화는 
              우리의 인생에서 가장 빛나는 순간들을 떠올리게 합니다.
              당신과 함께한 모든 순간이 황금처럼 빛났습니다.
            </div>
            
            <div className="decorative-line">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Page 5: Garlic Shrimp Skillet - Full Width */}
        <div className="page-fullwidth menu-page">
          <div className="menu-banner">
            <img src="/새우.png" alt="Garlic Shrimp" />
            <div className="page-number">05</div>
            <div className="dish-number">04</div>
          </div>
          
          <div className="menu-content">
            <div className="category-label">Specialty</div>
            <h2 className="dish-name">Garlic Shrimp Skillet</h2>
            
            <div className="dish-meaning">
              <div className="meaning-icon">♪</div>
              <div className="meaning-text">
                "축제 (Festival)"<br />
                함께 나누는 기쁨과 입안에서 터지는 즐거움
              </div>
            </div>
            
            <div className="dish-description">
              뜨거운 팬 위에서 춤추듯 익어가는 통통한 새우 요리입니다.
              마늘과 버터의 고소한 향기가 테이블을 가득 채우며, 
              사랑하는 당신과 함께하는 이 시간의 즐거움을 더해줍니다.
              오늘 밤, 우리만의 작은 축제가 시작됩니다.
            </div>
            
            <div className="decorative-line">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Page 6: Invitation Letter - Full Width */}
        <div className="page-fullwidth letter-page">
          <div className="letter-bg"></div>
          
          <div className="letter-content">
            <div className="letter-frame">
              <div className="corner-decoration corner-tl"></div>
              <div className="corner-decoration corner-tr"></div>
              <div className="corner-decoration corner-bl"></div>
              <div className="corner-decoration corner-br"></div>
              
              <div className="letter-title">To My Beloved</div>
              
              <div className="letter-body">
                사랑하는 여보에게,<br /><br />
                
                올 한 해도 정말 고생 많았어요.<br />
                때로는 지치고 힘들었을 텐데,<br />
                언제나 묵묵히 내 곁을 지켜줘서 고마워요.<br /><br />

                여보 덕분에 우리 가정이<br />
                이렇게 따뜻할 수 있었어요<br /><br />

                오는 토요일, 오직 당신 만을 위해<br />
                직접 준비하는 저녁 식사로<br />
                그동안의 감사함을 전하고 싶어요<br /><br />

                <strong>사랑해요. 늘 고마워요 ♥</strong>
              </div>
              
              <div className="signature-area">
                <div className="signature-label">With All My Love</div>
                <div className="signature-name">Your Husband</div>
                <div className="heart-icon">♥</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChristmasMenu;