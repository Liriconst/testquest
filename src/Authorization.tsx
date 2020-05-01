import * as React from "react";
import {Button, Input} from "antd";

export default class Authorization extends React.Component<{}, {

}>{
    public constructor (props: any) {
        super (props);
    }

    public render() {
        return (
            <div>
                <span>Авторизация</span>
                <Input>Логин</Input>
                <Input>Пароль</Input>
                <Button>Зарегистрироваться</Button>
            </div>
        );
    }
}