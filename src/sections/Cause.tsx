export const Cause = () => {
  return (
    <section className="program-section" id="cause">
      <div className="classic-frame">
        <div className="program-header">
          <h2 className="program-title" style={{ marginBottom: "0px" }}>
            Благотворителна кауза
          </h2>
        </div>

        <div className="program-elements">
          <div
            className="dresscode-text"
            style={{
              padding: "0 40px", // Намалих го малко от 90, за да не е твърде тясно на мобилни
            }}
          >
            <p className="justify-text" style={{ fontSize: "1.25rem" }}>
              Ние обичаме да четем. Обичаме да пътуваме през магични светове, да
              проследяваме различни истории, да разплитаме случаи или просто да
              се смеем. Но нека си признаем, няма по-невероятни книги от
              детските. Всеки от нас, вярваме и от вас, има любима детска книга,
              която му е донесла топлина, любов и вълнение. И ние вярваме, че
              всяко дете заслужава подобна магия в живота си.
            </p>

            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                textAlign: "center", // Важният призив остава центриран
                marginTop: "2rem",
                lineHeight: "1.2",
              }}
            >
              Затова молим ви, вместо цветя, донесете любимата си детска книга
              или поредица, а ние ще се погрижим те да достигнат до деца в
              нужда.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
