import Controller from '../screen-controller/statusPageController';
import MenuOpcion from '../components/menuOptions';
import '../../values/styles/statusPage.css'
import { ProgressBar, Table } from 'react-bootstrap'

const StatusPage = () => {
    const Progress = ({ progress, name }) => {
        return (
            <tr>
                <td><img src="https://ca.slack-edge.com/TAY2BPG0M-U02JQP4C9RC-8fd520f75ca8-48" /></td>
                <td><b>{name}</b></td>
                <td><ProgressBar className="progressBar" animated now={progress} /></td>
            </tr>
        );
    }
    return (
        <div>
            <MenuOpcion className="menu" />
            <p className='titleProgress'>Progreso Semanal</p>
            <div className='statusPage'>
                <Table hover size="sm">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Progreso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Progress progress={85} name={"Julian"} />
                        <Progress progress={15} name={"Andres"} />
                        <Progress progress={35} name={"Luciana"} />
                        <Progress progress={5} name={"Aryana"} />
                        <Progress progress={85} name={"Priscila"} />
                        <Progress progress={15} name={"Valera"} />
                        <Progress progress={35} name={"Karina"} />
                        <Progress progress={5} name={"Nicol"} />
                        <Progress progress={85} name={"Federico"} />
                        <Progress progress={15} name={"Jeen"} />
                        <Progress progress={35} name={"Julian"} />
                        <Progress progress={5} name={"Julian"} />
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default StatusPage