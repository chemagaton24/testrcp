import axios from "axios";
const handler = async (req, res) => {
  try {
    const formData = new FormData();
    formData.append("MERGE0", "chembeer.agaton@codeandtheory.com");
    formData.append("u", "61572bb8acf7b8704903af7b8");
    formData.append("id", "036f88a1e3");

    const response = await fetch(
      "https://realclearpolitics.us7.list-manage.com/subscribe/post?MERGE0=chembeer.agaton@codeandtheory.com&u=61572bb8acf7b8704903af7b8&id=036f88a1e3",
      {
        method: "GET",
      }
    );
    const dataHTML = await response.text();
    res.status(201).send(dataHTML);
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }

  // await axios.get("http://minhaserieapi.herokuapp.com/search/vikings");

  // await axios.post(
  //   "https://realclearpolitics.us7.list-manage.com/subscribe/post",
  //   formData,
  //   {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   }
  // );

  // res.status(201).send({ success: "strue" });

  // const formData = new FormData();
  // formData.append("MERGE0", "chembeer.agaton@codeandtheory.com");
  // formData.append("u", "61572bb8acf7b8704903af7b8");
  // formData.append("id", "036f88a1e3");

  //   const response = await fetch(
  //     "https://realclearpolitics.us7.list-manage.com/subscribe/post",
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   );
  //   const dataHTML = await response.text();
  //   res.status(201).send(dataHTML);
  // } catch (err) {
  //   res.status(500).send({ success: false, message: err.message });
  // }
};

export default handler;
