import {useState} from 'react';
import {api} from 'api';
import {Button} from 'antd';
export default function Test(){
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const { getData } = api.demo;
    const onGetData=()=>{
        setLoading(true);
        getData().then(res=>{
            setData(res);
            setLoading(false);
        });
    };
    return <div>
        <Button type="primary" onClick={onGetData} loading={loading}>获取数据</Button>
        {data&&<pre>{JSON.stringify(data,null,4)}</pre>}
    </div>;
}