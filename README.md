{
    "sections": [
        {
            "id": "about",
            "categoryId": "home",
            "jsonPath": "/data/sections/cover.json",
            "faIcon": "fa-solid fa-address-card"
        },

        {
            "id": "education",
            "categoryId": "background",
            "jsonPath": "/data/sections/education.json",
            "faIcon": "fa-solid fa-graduation-cap"
        },

        {
            "id": "skills",
            "categoryId": "showcase",
            "jsonPath": "/data/sections/skills.json",
            "faIcon": "fa-solid fa-tools"
        },

        {
            "id": "experience",
            "categoryId": "background",
            "jsonPath": "/data/sections/experience.json",
            "faIcon": "fa-solid fa-briefcase"
        },

        {
            "id": "portfolio",
            "categoryId": "showcase",
            "jsonPath": "/data/sections/portfolio.json",
            "faIcon": "fa-solid fa-folder-open"
        },

        {
            "id": "achievements",
            "categoryId": "showcase",
            "jsonPath": "/data/sections/achievements.json",
            "faIcon": "fa-solid fa-award"
        },

        {
            "id": "updates",
            "categoryId": "more",
            "jsonPath": "/data/sections/updates.json",
            "faIcon": "fa-solid fa-rss"
        },

        {
            "id": "contact",
            "categoryId": "more",
            "jsonPath": "/data/sections/contact.json",
            "faIcon": "fa-solid fa-pen-to-square"
        }
    ],

    "categories": [
        {
            "id": "home",
            "faIcon": "fa-solid fa-home",
            "locales": {
                "ru": {"title": "Услуги"},
                "es": {"title": "Inicio"},
                "fr": {"title": "Accueil"},
                "ko": {"title": "홈페이지"}
            }
        },

        {
            "id": "background",
            "faIcon": "fa-solid fa-clock",
            "locales": {
                "ru": {"title": "Мой путь"},
                "es": {"title": "Trayectoria"},
                "fr": {"title": "Parcours"},
                "ko": {"title": "경력"}
            }
        },

        {
            "id": "showcase",
            "faIcon": "fa-solid fa-images",
            "locales": {
                "ru": {"title": "Портфолио"},
                "es": {"title": "Vitrina"},
                "fr": {"title": "Vitrine"},
                "ko": {"title": "쇼케이스"}
            }
        },

        {
            "id": "more",
            "faIcon": "fa-solid fa-plus",
            "locales": {
                "ru": {"title": "Контакты"},
                "es": {"title": "Más"},
                "fr": {"title": "Plus"},
                "ko": {"title": "더보기"}
            }
        }
    ]
}






*********************************************


{
            "id": "interests",
            "component": "ArticleGrid",
            "config": {
                "format": "grid"
            },
            "locales": {
                "ru": {"title": "Мои **услуги**"},
                "es": { "title": "Intereses **personales**" },
                "fr": { "title": "Intérêts **personnels** " },
                "ko": { "title": "개인 **관심사**" }
            },

            "items": [
                {
                    "icon": {
                        "img": "images/svg/services/development.svg",
                        "fa": "",
                        "faColors": {"bg": null, "fill": null}
                    },
                    "value": null,
                    "locales": {
                        "ru": {
                            "title": "Разработка сайтов 'под ключ'",
                            "info": "Полный цикл: от идеи до запуска. Включает: дизайн, верстку, интеграцию с API и SEO настройку."},
                        "es": {
                            "title": "Tocar la guitarra",
                            "info": "Explorando diferentes géneros y mejorando mis habilidades."
                        }
                    }
                },

                {
                    "icon": {
                        "img": "images/svg/services/education.svg",
                        "fa": "",
                        "faColors": {"bg": null, "fill": null}
                    },
                    "value": null,
                    "locales": {
                        "ru": {
                            "title": "SEO оптимизация",
                            "info": "Анализ сайта и внедрение улучшений: скорость, структура, ключевые слова, подключение метрик."
                        },
                        "es": {
                            "title": "Edición de video con IA",
                            "info": "Aprendiendo a usar herramientas de IA para mejorar mis videos."
                        }
                    }
                },

                {
                    "icon": {
                        "img": "images/svg/services/project.svg",
                        "fa": "",
                        "faColors": {"bg": null, "fill": null}
                    },
                    "value": null,
                    "locales": {
                        "ru": {
                            "title": "Техническая поддержка и администрирование",
                            "info": "Администрирование контента, исправление ошибок, проверка производительности сайта."
                        },
                        "es": {
                            "title": "Ilustración",
                            "info": "Practicando arte digital y explorando nuevos estilos."
                        }
                    }
                },

                {
                    "icon": {
                        "img": "images/svg/services/dop.svg",
                        "fa": "",
                        "faColors": {"bg": null, "fill": null}
                    },
                    "value": null,
                    "locales": {
                        "ru": {
                            "title": "Обучение сотрудников",
                            "info": "Работа с CMS, Figma, самостоятельность в редактировании контента, обучение основам HTML, CSS, JavaScript."
                        },
                        "es": {
                            "title": "Invertir",
                            "info": "Aprendiendo los conceptos básicos de acciones y finanzas personales."
                        }
                    }
                }
            ]
        }