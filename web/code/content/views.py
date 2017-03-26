from apitools import ApiResponse
import models
import serializers

MODEL_NAMES = ('AboutCompany', 'News', 'WorkItem', 'Event', 'GaleryItem', 'Partner')

def content_provider(request, model_name):
    
    if model_name in MODEL_NAMES:
        cls = eval('models.' + model_name)
        serializer_cls = eval('serializers.' + model_name + 'Serializer')
        objects = cls.objects.all()
        serializer = serializer_cls(objects, many=True)
        return ApiResponse(serializer.data)

    return ApiResponse({'status': 'model has not been found'}, 404)
