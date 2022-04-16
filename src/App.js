function Train({ name, picture }) {
  return (
    <div> 
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const trainILike = [
  {
    name: 'KTX',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F939%2F42933227794_7faf0da3c6_b.jpg&f=1&nofb=1',
  },

  { 
    name: 'ITX-Cheongchun',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpostfiles4.naver.net%2FMjAxNzA1MDNfMjM4%2FMDAxNDkzODIwNzA2Njk5.BJc3R_QynJiQ2AJFZ7twu76rIqmD9RUfkTNRDc-WV7Eg.GCTZLm73e_3_ZwtQJfuLB9ouJlgiDJx0aHCsujvoleog.JPEG.babobabo777%2FDSC_6130.JPG%3Ftype%3Dw1&f=1&nofb=1',
  },

  { 
    name: 'ITX-Saemaeul',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4c%2F54%2Fac%2F4c54acbab9c0c9ace6d61dd535e206fe.jpg&f=1&nofb=1',
  },

  { 
    name: 'Mugunghwa-Ho',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcr12Nq%2FbtqAOc6P1gc%2FkjbsXfNwSeE31kF05xdIDk%2Fimg.jpg&f=1&nofb=1',
  },

  { 
    name: 'Nuriro',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F884e3f_23b5380f7953475289c1552ed86010c9~mv2.jpg%2Fv1%2Ffit%2Fw_1000%252Ch_844%252Cal_c%252Cq_80%2Ffile.jpg&f=1&nofb=1',
  },
];

function App() {
  return (
  <div>
    {trainILike.map(dish => (<Train name={dish.name} picture={dish.image} />))}
  </div>
  );
}

export default App;