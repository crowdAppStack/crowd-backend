<?php

namespace App\Enums;

enum DomainPrefix: string
{
    case API = 'api';
    case APP = 'app';
    case ADMIN = 'admin';
}
