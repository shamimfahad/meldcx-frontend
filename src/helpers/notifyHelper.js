import axios from 'axios';

export const notifyCompletion = async (callBackFn) => {
  const token = localStorage.getItem('token') ?? null;
  if (token) {
    const response = await axios.post(
      'http://35.201.2.209:8000/notify',
      {
        name: 'Shamim Fahad Shuvo',
        email: 'shamimfahadshuvo@gmail.com',
        repoUrl: 'https://github.com/shamimfahad/meldcx-frontend',
        message: `You gave me seven days to complete the task, I tried to make the best out of it. Since it's a small project, I stopped myself from increasing complexity and using unnecessary methods and techs.`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    callBackFn(false);
    response.data.status === 201
      ? alert(
          'Successfully notified the core team about the completion of this project.'
        )
      : alert('There was an error, check console');
  }
};
