import React, {useState} from 'react'
import Button from "../../Components/Atoms/Button";
import Input from "../../Components/Atoms/Input";
import Tabs from "../../Components/Atoms/Tabs";
import Tab from "../../Components/Atoms/Tab";
import TabPanel from "../../Components/Atoms/TabPanel";
import BigNumber from "../../Components/Atoms/BigNumber";
import HeaderText from "../../Components/Atoms/HeaderText";

const Atoms = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div>
            <Button>버튼</Button>
            <Button buttonType={'secondary'}>버튼</Button>

            <br />

            <Input placeholder={'이메일을 입력하세요.'}/>

            <Tabs value={value} onChange={handleChange}>
                <Tab index={0} label={'첫번째'} />
                <Tab index={1} label={'두번째'}/>
            </Tabs>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item two
            </TabPanel>

            <br/>
            <br/>

            <BigNumber number={1} />

            <br/>
            <br/>

            <HeaderText text={'안녕하세요 l'} />
            <HeaderText text={'안녕하세요 xxl'} size={'xxl'} />
        </div>
    )
}

export default Atoms