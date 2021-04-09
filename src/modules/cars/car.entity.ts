import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table
export class Car extends Model<Car> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    model: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    type: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    year: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    driverAirbag: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    centralLock: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    esp: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    abs: Boolean;
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    childLock: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    traficLightSensors: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    electricWindowLifters: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    electricSideMirrors: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    seatAdjustableByHeight: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    multifunctionalSteeringWheel: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    onBoardComputer: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    tempomat: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    parkingSensors: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    radioCD: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    bluetooth: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    navigation: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    onCredit: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    leasing: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    searviceBook: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    warranty: Boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    firstOwner: Boolean;


}

//sifarnici
// tip_vozila	"automobili"
// status	"A"
// marka	"Ford"
// model	"Mustang"
// godina_proizvodnje	"2018"
// karoserija	"Kabriolet / Roadster"
// gorivo	"Benzin"
// emisiona_klasa	"EURO 6"
// pogon	"Zadnji"
// menjac	"Automatski"

// kubikaza	2300
// snaga_kw	233
// snaga_ks	317
// kilometraza	1600

// broj_vrata	"2/3 vrata"
// broj_sedista	"4 sjedišta"
// klima	"Automatska klima"
// boja	"plava"
// registracija	"Nije registrovan"
// ostecenje	"Nije oštećen"
// poreklo	"Domaće tablice"
// obelezje	""
// strana_volana	"Lijevi volan"
// materijal_enterijera	"Prirodna koža"
// boja_enterijera	"crna"
// zamena	"Moguća zamjena"
// idVrstaOglasa	"Običan oglas"

// // slike	"https://res.cloudinary.com/gaba387/image/upload/v1547127515/Ford/Ford%20Mustang/IMG_2577.jpg;https://res.cloudinary.com/gaba387/image/upload/v1547127518/Ford/Ford%20Mustang/IMG_2574.jpg;https://res.cloudinary.com/gaba387/image/upload/v1547127542/Ford/Ford%20Mustang/IMG_2603.jpg;https://res.cloudinary.com/gaba387/image/upload/v1547127542/Ford/Ford%20Mustang/IMG_2604.jpg;https://res.cloudinary.com/gaba387/image/upload/v1547127542/Ford/Ford%20Mustang/IMG_2595.jpg;https://res.cloudinary.com/gaba387/image/upload/v1547127529/Ford/Ford%20Mustang/IMG_2586.jpg"
// cena	"88000"