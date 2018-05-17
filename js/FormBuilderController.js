var formBuilderApp = angular.module('formBuilderApp',[]);

formBuilderApp.controller('FormBuilderController', function($scope){

    //#region Variáveis de Escopo
    $scope.campos = [];
    $scope.novoCampo = {};
    $scope.edicao = false;

    $scope.sucesso = false;
    $scope.erroRotuloCampo = false;
    $scope.erroTipoCampo = false;
    $scope.erroOpcoesCampo = false;
    $scope.erroOpcaoVazia = false;
    //#endregion

    //#region Método validarCampos()
    $scope.validarCampos = function(){
        var camposValidos = true;
        if ($scope.novoCampo.ROTULO_CAMPO == undefined ||
            $scope.novoCampo.ROTULO_CAMPO == null ||
            $scope.novoCampo.ROTULO_CAMPO == '') {
            
            camposValidos = false;
            $scope.erroRotuloCampo = true;
        } else {
            $scope.erroRotuloCampo = false;
        }
        
        if ($scope.novoCampo.TIPO_CAMPO == undefined ||
            $scope.novoCampo.TIPO_CAMPO == null ||
            $scope.novoCampo.TIPO_CAMPO == '') {
            
            camposValidos = false;
            $scope.erroTipoCampo = true;
        } else {
            $scope.erroTipoCampo = false;
        }

        if ((!$scope.erroTipoCampo) &&
            ($scope.novoCampo.TIPO_CAMPO == 'select' ||
            $scope.novoCampo.TIPO_CAMPO == 'multiple' ||
            $scope.novoCampo.TIPO_CAMPO == 'radio') &&
            ($scope.novoCampo.OPCOES == undefined ||
            $scope.novoCampo.OPCOES == null ||
            $scope.novoCampo.OPCOES.length <= 0)) {

            camposValidos = false;
            $scope.erroOpcoesCampo = true;
        } else {
            $scope.erroOpcoesCampo = false;
        }

        if($scope.novoCampo.OPCOES != undefined) {
            for (i = 0 ; i < $scope.novoCampo.OPCOES.length ; i++) {
                if($scope.novoCampo.OPCOES[i].VALOR_OPCAO == undefined ||
                    $scope.novoCampo.OPCOES[i].VALOR_OPCAO == null ||
                    $scope.novoCampo.OPCOES[i].VALOR_OPCAO == '') {
    
                    camposValidos = false;
                    $scope.erroOpcaoVazia = true;
    
                    break;
                } else {
                    $scope.erroOpcaoVazia = false;
                }
            }
        }

        if ((!$scope.erroTipoCampo) &&
            ($scope.novoCampo.TIPO_CAMPO != 'select' &&
            $scope.novoCampo.TIPO_CAMPO != 'multiple' &&
            $scope.novoCampo.TIPO_CAMPO != 'radio') &&
            ($scope.novoCampo.OPCOES != undefined)) {
        
            delete $scope.novoCampo.OPCOES;
        }


        return camposValidos
    }
    //#endregion

    //#region Método salvarCampo() 
    $scope.salvarCampo = function(){
        if($scope.edicao !== false){
            if ($scope.validarCampos()) {
                $scope.campos[$scope.edicao] = $scope.novoCampo;
                $scope.edicao = false

                $scope.sucesso = true;
                $scope.erroRotuloCampo = false;
                $scope.erroTipoCampo = false;
                $scope.erroOpcoesCampo = false;

                $scope.novoCampo = {};
            }
        } else {
            if ($scope.validarCampos()) {
                $scope.campos.push($scope.novoCampo);
                
                $scope.sucesso = true;
                $scope.erroRotuloCampo = false;
                $scope.erroTipoCampo = false;
                $scope.erroOpcoesCampo = false;

                $scope.novoCampo = {};
            }
        }
    }
    //#endregion

    //#region Método editarCampo(campo)
    $scope.editarCampo = function(campo){
        $scope.edicao = $scope.campos.indexOf(campo);
        $scope.novoCampo = campo;
    }
    //#endregion

    //#region Método remover(campo, campos)
    $scope.remover = function(campo, campos){
        campos.splice(campos.indexOf(campo), 1);
    }
    //#endregion

    //#region Método mudouTipoCampo(tipo)
    $scope.mudouTipoCampo = function(tipo){
        if(tipo == 'select'){
            return 'multiple';
        }
        if(tipo == 'radio'){
            return 'multiple';
        }

        return tipo;
    }
    //#endregion

    //#region Método adicionarOpção()
    $scope.adicionarOpcao = function(){
        if ($scope.novoCampo.OPCOES === undefined) {
			$scope.novoCampo.OPCOES = [];
        }
        
		$scope.novoCampo.OPCOES.push({});
    }
    //#endregion

    //#region Método mostrarInstrucao()
    $scope.mostrarInstrucao = function(){
        if ($scope.novoCampo.TIPO_CAMPO != undefined &&
            $scope.novoCampo.TIPO_CAMPO == 'text' || 
            $scope.novoCampo.TIPO_CAMPO == 'textarea' || 
            $scope.novoCampo.TIPO_CAMPO == 'select'){

            return true;
        } else {
            return false;
        }
    }
    //#endregion

    //#region Método mostrarObrigatorio()
    $scope.mostrarObrigatorio = function(){
        if ($scope.novoCampo.TIPO_CAMPO != undefined &&
            $scope.novoCampo.TIPO_CAMPO !== 'header' &&
            $scope.novoCampo.TIPO_CAMPO !== 'subheader'){

            return true;
        } else {
            return false;
        }
    }
    //#endregion

});