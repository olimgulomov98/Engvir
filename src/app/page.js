const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "ВАСОРИН",
  description:
    "Комбинированный растительный препарат для лечения заболеваний почек и мочевыводящих путей. Мочегонное, спазмолитическое, противовоспалительное, противомикробное действие.",
  image: "https://vasorin.uz/vasorin.webp",
  brand: {
    "@type": "Brand",
    name: "Spring Pharmaceutic",
  },
  manufacturer: {
    "@type": "Organization",
    name: 'ООО "SPRING PHARMACEUTIC"',
    address: {
      "@type": "PostalAddress",
      addressCountry: "UZ",
      addressRegion: "Наманганская область",
      addressLocality: "Касансайский район",
      streetAddress: "Кукимбой, Навбахор МСГ, улица Булак, дом 129",
    },
    telephone: "+998996942363",
    email: "spring_pharmaceutic@gmail.com",
    sameAs: [
      "https://www.instagram.com/springpharmaceutic/",
      "https://www.facebook.com/spring.pharm.3/",
      "https://t.me/SpringPharmaceutic",
    ],
  },
  category: "Фитопрепараты, урология",
  url: "https://vasorin.uz",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="xl:max-w-[1110px] my-0 mx-auto w-[90%]">
        <div className="h-[80px] flex items-center justify-between">
          <a href="#">
            <img
              height={50}
              width={100}
              className={"block md:hidden"}
              src="/vasorin-logo.svg"
              alt="vasorin"
              loading={"lazy"}
            />
            <img
              width={250}
              height={200}
              className={"hidden md:block"}
              src="/vasorin-logo.svg"
              alt="vasorin"
              loading={"lazy"}
            />
          </a>
          <h3 className="text-[11px] md:text-[18px] md:block font-medium">
            Tel: +998 99 694 23 63
          </h3>
        </div>
        <div className="mt-[50px]">
          <h2 className="font-semibold text-center text-4xl font-roboto">
            « ВАСОРИН »
          </h2>
          <div className="flex justify-center flex-wrap md:flex-nowrap md:items-end">
            <img
              height={600}
              width={600}
              className="hidden md:block"
              src="/vasorin.webp"
              alt="vasorin"
              loading={"lazy"}
            />
            {/* <img
              height={600}
              width={600}
              className="hidden md:block w-[500px] h-[500px]"
                  src="/vasorin.webp"
              alt="vasorin"
              loading={"lazy"}
            /> */}
            <img
              height={300}
              width={300}
              className="block md:hidden"
              src="/vasorin.webp"
              alt="vasorin"
              loading={"lazy"}
            />

            {/*<img*/}
            {/*    className="h:[50vh] md:h-[60vh]"*/}
            {/*    src="/Invirep.webp"*/}
            {/*    alt="invirep, ИНВИРЕП"/>*/}
          </div>
          <h3 className="text-xl md:text-2xl mt-5 text-[#0C54A0] font-semibold font-roboto mb-3">
            ИНСТРУКЦИЯ ПО МЕДИЦИНСКОМУ ПРИМЕНЕНИЮ ВАСОРИН.
          </h3>
          <div className="text-[14px] md:text-[16px] font-roboto font-light">
            <div className="mb-4">
              <strong className="font-medium">
                <span className="text-[#0C54A0]">
                  Торговое название препарата:{" "}
                </span>
                Васорин
              </strong>

              <div className="my-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Действующее вещество (МНН):{" "}
                  </span>
                  Arginine hydrochloride
                </strong>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Лекарственная форма: </span>
                  раствор для инфузий
                </strong>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Состав: активное вещество:{" "}
                  </span>
                  1 мл содержит 42 мг аргинина гидрохлорида; вспомогательное
                  вещество: вода для инъекций.
                </strong>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Описание: </span>
                  прозрачная, бесцветная или слегка желтовато-коричневая
                  жидкость; рН 5,0–6,5. Теоретическая осмолярность 398,7
                  мосмоль/л.
                </strong>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Фармакотерапевтическая группа.{" "}
                  </span>
                  Кровезаменители и перфузионные растворы. Дополнительные
                  растворы для внутривенного введения. Аминокислоты. Аргинина
                  гидрохлорид.
                </strong>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Фармакологические свойства
                  </span>
                </strong>
              </div>

              <div className="mb-2">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">Фармакодинамика</span>
                </strong>
              </div>

              <div className="">
                {/* Фармакодинамика */}
                <div className="mb-4">
                  <p className="mb-2 font-medium">
                    Аргинин (α-амино-δ-гуанидиновалериановая кислота) –
                    аминокислота, которая относится к классу условно незаменимых
                    аминокислот и является активным и разносторонним клеточным
                    регулятором многочисленных жизненно важных функций
                    организма, проявляет важные в критическом состоянии
                    организма протекторные эффекты. Васорин проявляет
                    антигипоксическую, мембраностабилизирующую,
                    цитопротекторную, антиоксидантную, антирадикальную,
                    дезинтоксикационную активность, проявляет себя как активный
                    регулятор промежуточного обмена и процессов
                    энергообеспечения, играет определенную роль в поддержании
                    гормонального баланса в организме.
                  </p>
                  <p className="mb-1 font-medium">
                    Известно, что аргинин увеличивает содержание в крови
                    инсулина, глюкагона, соматотропного гормона и пролактина,
                    принимает участие в синтезе пролина, полиамина, агматина,
                    включается в процессы фибриногенолиза, сперматогенеза,
                    проявляет мембранодеполяризирующее действие. Аргинин
                    является одним из основных субстратов в цикле синтеза
                    мочевины в печени. Гипоаммониемический эффект препарата
                    реализуется путем активации превращения аммиака в мочевину.
                    Проявляет гепатопротекторное действие благодаря
                    антиоксидантной, антигипоксической и мембраностабилизирующей
                    активности, положительно влияет на процессы
                    энергообеспечения в гепатоцитах.
                  </p>
                  <p className="mb-1 font-medium">
                    Васорин является субстратом для NO-синтазы – фермента,
                    катализирующего синтез оксида азота в эндотелиоцитах.
                    Препарат активирует гуанилатциклазу и повышает уровень
                    циклического гуанозинмонофосфата (цГМФ) в эндотелии сосудов,
                    уменьшает активацию и адгезию лейкоцитов и тромбоцитов к
                    эндотелию сосудов, подавляет синтез протеинов адгезии VCAM-1
                    и МСР-1, предотвращая, таким образом, образование и развитие
                    атеросклеротических бляшек, подавляет синтез эндотелина-1,
                    который является мощным вазоконстриктором и стимулятором
                    пролиферации и миграции гладких миоцитов сосудистой стенки.
                  </p>
                  <p className="mb-1 font-medium">
                    Васорин подавляет также синтез асимметрического
                    диметиларгинина – мощного эндогенного стимулятора
                    оксидативного стресса. Препарат 2 стимулирует деятельность
                    вилочковой железы, продуцирующей Т-клетки, регулирует
                    содержание глюкозы в крови во время физической нагрузки.
                    Оказывает кислотообразующее действие и способствует
                    коррекции кислотно-щелочного равновесия.
                  </p>
                </div>

                {/* Фармакокинетика */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Фармакокинетика</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    При непрерывной внутривенной инфузии максимальная
                    концентрация аргинина гидрохлорида в плазме крови
                    наблюдается через 20–30 мин от начала введения. Васорин
                    проникает через плацентарный барьер, фильтруется в почечных
                    клубочках, однако практически полностью реабсорбируется в
                    почечных канальцах.
                  </p>
                  <p className="mt-1 font-medium">
                    Показания к применению Метаболический алкалоз,
                    гипераммониемия, атеросклероз сосудов сердца и головного
                    мозга, атеросклероз периферических сосудов, в том числе с
                    проявлениями перемежающейся хромоты, диабетическая
                    ангиопатия, артериальная гипертензия, хроническая сердечная
                    недостаточность, гиперхолестеринемия, хронические
                    обструктивные заболевания легких, легочная гипертензия,
                    задержка развития плода и преэклампсия - в составе
                    комплексной терапии.
                  </p>
                  <p className="mt-1 font-medium">
                    Способ применения и дозы Препарат вводится внутривенно
                    капельно со скоростью 10 капель в минуту в течение первых
                    10–15 мин, затем скорость введения можно увеличить до 30
                    капель в минуту. Суточная доза препарата – 100 мл раствора.
                    В 100 мл содержится 20 ммоль аргинина и 20 ммоль хлоридов.
                    При тяжелых нарушениях кровообращения в центральных и
                    периферических сосудах, при выраженных явлениях
                    интоксикации, гипоксии, астенических состояниях доза
                    препарата может быть увеличена до 200 мл в сутки.
                  </p>
                  <p className="mt-1 font-medium">
                    Максимальная скорость введения инфузионного раствора не
                    должна превышать 20 ммоль/час. Детям в возрасте до 12 лет
                    доза препарата составляет 5–10 мл на 1 кг массы тела в
                    сутки. Для лечения метаболического алкалоза дозу можно
                    рассчитать следующим образом: аргинина гидрохлорид (ммоль)
                    избыток щелочей (Ве) (ммоль/л) Введение следует начинать с
                    половины рассчитанной дозы. Возможную дополнительную
                    коррекцию следует проводить после получения результатов
                    обновленного кислотнощелочного баланса.
                  </p>
                </div>

                {/* Побочные действия */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Побочные действия</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Общие расстройства: гипертермия, ощущение жара, ломота в
                    теле.
                  </p>
                  <p className="mt-1 font-medium">
                    Со стороны костно-мышечной системы: боль в суставах.
                  </p>
                  <p className="mt-1 font-medium">
                    Со стороны пищеварительного тракта: сухость во рту, тошнота,
                    рвота.
                  </p>
                  <p className="mt-1 font-medium">
                    Со стороны кожи и подкожной клетчатки: изменения в месте
                    введения, включая гиперемию, ощущение зуда, побледнение кожи
                    вплоть до акроцианоза.
                  </p>
                  <p className="mt-1 font-medium">
                    Со стороны иммунной системы: анафилактический шок, реакции
                    гиперчувствительности, включая высыпания, крапивницу,
                    ангионевротический отек.
                  </p>
                  <p className="mt-1 font-medium">
                    Со стороны дыхательной системы, органов грудной клетки и
                    средостения: одышка.
                  </p>
                  <p className="mt-1 font-medium">
                    Со стороны сердечно-сосудистой системы: колебания
                    артериального давления, изменения сердечного ритма, боль в
                    области сердца.
                  </p>
                  <p className="mt-1 font-medium">
                    Со стороны нервной системы: головная боль, головокружение,
                    чувство страха, слабость, судороги, тремор, чаще при
                    превышении рекомендуемой скорости введения. Лабораторные
                    показатели: гиперкалиемия. × 0,3 × масса тела (кг) 3
                  </p>
                </div>

                {/* Противопоказания */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Противопоказания</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Повышенная чувствительность к препарату. Тяжелые нарушения
                    функции почек, гиперхлоремический ацидоз; аллергические
                    реакции в анамнезе; применение калийсберегающих диуретиков,
                    а также спиронолактона. Инфаркт миокарда (в том числе в
                    анамнезе). Лекарственные взаимодействия При применении
                    Васорин необходимо учитывать, что препарат может вызвать
                    выраженную и стойкую гиперкалиемию на фоне почечной
                    недостаточности у больных, которые принимают или принимали
                    спиронолактон.
                  </p>
                  <p className="mt-1 font-medium">
                    Предварительное применение калийсберегающих диуретиков также
                    может способствовать повышению уровня концентрации калия в
                    крови. При одновременном применении с аминофиллином возможно
                    повышение уровня инсулина в крови. Аргинин несовместим с
                    тиопенталом. Несовместимость :препарат несовместим с
                    тиопенталом.
                  </p>
                </div>

                {/* Особые указания */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Особые указания</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    У пациентов с почечной недостаточностью перед началом
                    инфузии необходимо проверить диурез и уровень калия в плазме
                    крови, поскольку препарат может способствовать развитию
                    гиперкалиемии. Препарат с осторожностью применяют при
                    нарушении функции эндокринных желез. Васорин может
                    стимулировать секрецию инсулина и гормона роста.
                  </p>
                  <p className="mt-1 font-medium">
                    При появлении ощущения сухости во рту необходимо проверить
                    уровень сахара в крови. С осторожностью следует применять
                    при нарушении обмена электролитов, заболеваниях почек. Если
                    на фоне приема препарата нарастают симптомы астении, то
                    лечение следует отменить.
                  </p>
                  <p className="mt-1 font-medium">
                    Препарат с осторожностью применяют у пациентов со
                    стенокардией.
                  </p>
                  <p className="mt-1 font-medium">
                    Применение в период беременности или кормления грудью
                    Препарат проникает через плаценту, поэтому в период
                    беременности его можно применять только тогда, когда
                    ожидаемая польза для матери превышает потенциальный риск для
                    плода. Данные относительно применения препарата в период
                    кормления грудью отсутствуют.
                  </p>
                  <p className="mt-1 font-medium">
                    Дети :препарат применяют детям в возрасте от 3 лет.
                  </p>
                  <p className="mt-1 font-medium">
                    Способность влиять на скорость реакции при управлении
                    автотранспортом или с другими механизмами Во время
                    управления автотранспортом или при работе с другими
                    механизмами следует соблюдать осторожность, поскольку
                    препарат может вызвать головокружение.
                  </p>
                </div>

                {/* Передозировка */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Передозировка</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Симптомы: почечная недостаточность, гипогликемия,
                    метаболический ацидоз. Лечение. В случае передозировки
                    инфузию препарата необходимо прекратить. Следует проводить
                    мониторинг физиологических реакций и поддержание жизненных
                    функций организма.
                  </p>
                  <p className="mt-1 font-medium">
                    При необходимости вводить ощелачивающие средства и средства
                    для налаживания диуреза (салуретики), растворы электролитов
                    (0,9 % раствор натрия хлорида), 5 % раствор глюкозы. Терапия
                    симптоматическая. Форма выпуска : 100 мл в пластиковом
                    флаконе №1 в пачке.
                  </p>
                </div>

                {/* Условия хранения */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Условия хранения</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    Хранить при температуре не выше 25°С. Хранить в недоступном
                    для детей месте.
                  </p>
                </div>

                {/* Срок годности */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">Срок годности</span>
                  </strong>
                  <p className="mt-2 font-medium">
                    2 года. Не применять после истечения срока годности.
                  </p>
                </div>

                {/* Условия отпуска из аптек */}
                <div className="mb-4">
                  <strong className="font-medium">
                    <span className="text-[#0C54A0]">
                      Условия отпуска из аптек
                    </span>
                  </strong>
                  <p className="mt-2 font-medium">По рецепту.</p>
                </div>
              </div>

              <div className="mb-4">
                <strong className="font-medium">
                  <span className="text-[#0C54A0]">
                    Местонахождение производителя и адрес места осуществления
                    деятельности:
                  </span>
                </strong>
                <p className="mt-2 text-[14px]">
                  Республика Узбекистан, Наманганская область, Касансайский
                  район, Кукимбой, Навбахор МСГ, улица Булак, дом 129.
                  <br />
                  Тел.: +998996942363
                </p>
              </div>

              <a
                href="https://www.instagram.com/springpharmaceutic/"
                className="flex gap-3 items-center"
              >
                <img
                  src="/Instagram-Logo.wine.svg"
                  loading={"lazy"}
                  className="w-[30px] h-[30px]"
                  alt="instagram"
                />
                @springpharmaceutic
              </a>
              <a
                href="https://www.facebook.com/spring.pharm.3/"
                className="flex gap-3 items-center"
              >
                <img
                  src="/Facebook-f_Logo-Blue-Logo.wine.svg"
                  loading={"lazy"}
                  className="w-[30px] h-[30px]"
                  alt="instagram"
                />
                Spring Pharm
              </a>
              <a
                href="https://t.me/SpringPharmaceutic"
                className="flex gap-3 items-center"
              >
                <img
                  src="/telegram.webp"
                  width={20}
                  height={20}
                  loading={"lazy"}
                  className="w-[20px] h-[20px] ml-1"
                  alt="instagram"
                />
                Spring_Pharmaceutic
              </a>
              <a href="#" className="flex gap-3 items-center mb-3">
                <img
                  src="/email-svgrepo-com.svg"
                  loading={"lazy"}
                  className="w-[25px] h-[25px]"
                  alt="instagram"
                />
                spring_pharmaceutic@gmail.com
              </a>
              <div className="mb-5 flex gap-3 flex flex-wrap">
                <a
                  href="/instruction_ru.docx"
                  className="px-3 py-2 bg-green-500 text-white inline-flex items-center gap-2 rounded-lg text-[12px] md:text-[16px]"
                >
                  СКАЧАТЬ ИНСТРУКЦИЮ
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <g id="Interface / Download">
                      <path
                        id="Vector"
                        d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </a>
                {/* <a
                href="/instruction_uz.docx"
                className="px-3 py-2 bg-green-500 text-white inline-flex items-center gap-2 rounded-lg text-[12px] md:text-[16px]"
              >
                СКАЧАТЬ ИНСТРУКЦИЮ НА УЗБЕКСКОМ ЯЗЫКЕ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <g id="Interface / Download">
                    <path
                      id="Vector"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
