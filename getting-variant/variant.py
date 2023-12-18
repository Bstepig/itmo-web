from dataclasses import dataclass
from enum import Enum


class Database(Enum):
    """Какую базу данных необходимо использовать в проекте. (Кажется, всегда постгрес на самом деле.)"""
    POSTGRESQL = 1
    ORACLE = 2


class ORM(Enum):
    """Какую ORM необходимо использовать в проекте."""
    HIBERNATE = 1
    JPA = 2
    JDBC = 3
    ECLIPSE_LINK = 4


class BeanConfig(Enum):
    """Бины должны быть реализованы с помощью аннотаций или в конфигурационном файле."""
    ANNOTATION = 1
    CONFIG_FILE = 2


class BeanScope(Enum):
    """Бины должны быть реализованы на application уровне или session уровне."""
    APPLICATION = 1
    SESSION = 2


@dataclass
class LabVariant3:
    variant: int
    database: Database
    orm: ORM
    bean_config: BeanConfig
    bean_scope: BeanScope
    # Интерактивные часы, показывающие текущие дату и время,
    # обновляющиеся раз в update_time секунд
    update_time: int


class InputType(Enum):
    # options
    selectOneRadio = 1
    # options
    selectOneMenu = 2
    # options
    selectBooleanCheckbox = 3
    # options
    commandButton = 4
    # options
    commandLink = 5
    # min, max
    inputText = 6
    # min, max, step
    pSpinner = 7
    # min, max, step
    pSlider = 8
    # min, max, step
    aceSliderEntry = 9


input_type_dict = {
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_selectoneradio_tag.htm]
    "selectOneRadio": InputType.selectOneRadio,
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_selectonemenu_tag.htm]
    "selectOneMenu": InputType.selectOneMenu,
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_selectbooleancheckbox_tag.htm]
    "selectBooleanCheckbox": InputType.selectBooleanCheckbox,
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_commandbutton_tag.htm]
    "commandButton": InputType.commandButton,
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_commandlink_tag.htm]
    "commandLink": InputType.commandLink,
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_inputtext_tag.htm]
    "inputText": InputType.inputText,
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_selectoneradio_tag.htm]
    "p:spinner": InputType.pSpinner,
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_selectoneradio_tag.htm]
    "p:slider": InputType.pSlider,
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_selectoneradio_tag.htm]
    "ace:sliderEntry": InputType.aceSliderEntry,
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_selectoneradio_tag.htm]
    "pispinner": InputType.pSpinner,
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_selectoneradio_tag.htm]
    "pislider": InputType.pSlider,
    # (Doc)[https://www.tutorialspoint.com/jsf/jsf_selectoneradio_tag.htm]
    "aceisliderEntry": InputType.aceSliderEntry,
}


@dataclass
class Input:
    type: InputType
    options: list[int] or None
    min: int or None
    max: int or None
    step: int or None
