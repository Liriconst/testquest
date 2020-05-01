import * as React from "react";
import {Button, Input} from "antd";

export default class Registration extends React.Component<{}, {

}>{
    public constructor (props: any) {
        super (props);
    }

    public render() {
        return (
            <div>
                <span>Регистрация</span>
                <Input>Логин</Input>
                <Input>ФИО</Input>
                <Input>email</Input>
                <Input>Пароль</Input>
                <Input>Повторите пароль</Input>
                <Button>Зарегистрироваться</Button>
            </div>
        );
    }
}