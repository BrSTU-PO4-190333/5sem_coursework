import axios from 'axios';

class FetchEmail
{
    constructor() {
        this.api = `${process.env.REACT_APP_api_url}/api/email`;
    }

    async send(params) {
        try {
            const url = this.api;
            const response = await axios.post(url, params);
            console.log(response);

            if (response.data.code === 200) {
                alert("Заявка отправлена");
                return;
            }

            alert(`Заявка не отправлена. Код ошибки: ${response.data.code}`);

            return;
        } catch (error) {
            alert("Сообщение не отправлено. Ошибка связи с сервером");
            console.log(error);
            return;
        }
    }
};

export default FetchEmail;
