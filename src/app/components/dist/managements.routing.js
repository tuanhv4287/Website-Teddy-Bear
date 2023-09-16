"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagementRoutingModule = exports.ManagementsRoutes = void 0;
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
exports.ManagementsRoutes = [
    // { path: 'thong-tin-co-so', component: ThongTinCoSoComponent },
    // {
    //    path: 'test-plan', canActivate: [AuthGuard], component: TestPlanComponent, children: [
    //        { path: 'test-plan-detail', component: TestPlanDetailComponent },
    //    ]
    // },
    // { path: 'test-item-detail/:id', component: TestItemDetailComponent },
    // { path: 'execute-detail/:id', component: ExecuteDetailComponent },
    // { path: 'user-list', canActivate: [AuthGuard], component: UserListComponent, data: { roles: 'ngo.tai', path: 'user-list' } },
    { path: '', pathMatch: 'full' },
];
var ManagementRoutingModule = /** @class */ (function () {
    function ManagementRoutingModule() {
    }
    ManagementRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(exports.ManagementsRoutes)],
            exports: [router_1.RouterModule]
        })
    ], ManagementRoutingModule);
    return ManagementRoutingModule;
}());
exports.ManagementRoutingModule = ManagementRoutingModule;
